import { startRun } from './streaming-to-the-browser-guide.js'

// --8<-- [start:nextjs_runs_route]
export const runtime = 'nodejs'

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { prompt?: unknown }
  if (typeof body.prompt !== 'string' || !body.prompt.trim()) {
    const error = 'prompt must be a non-empty string'
    return Response.json({ error }, { status: 400 })
  }
  return Response.json({ id: startRun(body.prompt).id }, { status: 201 })
}
// --8<-- [end:nextjs_runs_route]
