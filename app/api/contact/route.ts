import { NextResponse } from "next/server"

// ---------------------------------------------------------------------------
// Server-side only configuration for the Deploymo quote-request Google Form.
// The private /edit URL must NEVER be exposed; only the public formResponse
// endpoint (extracted from the form's responder page) is used for submissions.
// ---------------------------------------------------------------------------
const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe-p2_9Cky7Ef2C-UZ19e-TvqesKPi8LkqarUnYo6K65C8Hhw/formResponse"

// Website form field -> Google Forms entry ID.
// Entry IDs were read from the live form structure (not guessed). In the form's
// item data, question[0] is the ITEM id; the real entry id is the nested
// question[4][0][0] value — confirmed against the actual `name="entry.*"`
// attributes Google renders for the multiple-choice questions:
//   Your Name                    -> entry.447759087
//   Company / Agency Name        -> entry.705816591
//   Work Email                   -> entry.501390308
//   Phone / Mobile               -> entry.963715165
//   Primary Manpower Category    -> entry.1793386097
//   Staff Count Required         -> entry.2073100849
//   Location(s)                  -> entry.1650593228
//   Campaign Duration / Dates    -> entry.252996322
//   Campaign Brief & Requirements-> entry.358735587
const FIELD_TO_ENTRY: Record<string, string> = {
  name: "entry.447759087",
  company: "entry.705816591",
  email: "entry.501390308",
  phone: "entry.963715165",
  category: "entry.1793386097",
  headcount: "entry.2073100849",
  location: "entry.1650593228",
  duration: "entry.252996322",
  brief: "entry.358735587",
}

const REQUIRED_FIELDS = Object.keys(FIELD_TO_ENTRY)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function fail(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status })
}

export async function POST(request: Request) {
  // 1. Parse the request body.
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return fail("Invalid request. Please reload the page and try again.", 400)
  }

  // 2. Validate required fields server-side (mirrors the form's required attributes).
  const values: Record<string, string> = {}
  const missing: string[] = []
  for (const field of REQUIRED_FIELDS) {
    const raw = body?.[field]
    const value = typeof raw === "string" ? raw.trim() : ""
    if (!value) missing.push(field)
    values[field] = value
  }
  if (missing.length > 0) {
    return fail("Please fill in all required fields before submitting.", 400)
  }
  if (!EMAIL_PATTERN.test(values.email)) {
    return fail("Please enter a valid work email address.", 400)
  }

  // 3. Build the Google Forms formResponse payload (entry mapping stays server-side).
  const params = new URLSearchParams()
  for (const [field, entryId] of Object.entries(FIELD_TO_ENTRY)) {
    params.append(entryId, values[field])
  }

  // 4. Submit silently to Google Forms.
  try {
    const googleRes = await fetch(GOOGLE_FORM_RESPONSE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: params.toString(),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    })

    if (!googleRes.ok) {
      console.error(`[contact] Google Forms rejected the submission (HTTP ${googleRes.status})`)
      return fail(
        "We could not submit your request right now. Please try again in a moment, or reach us on WhatsApp.",
        502
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contact] Google Forms submission failed:", err)
    return fail(
      "We could not reach our submission service. Please check your connection and try again.",
      502
    )
  }
}
