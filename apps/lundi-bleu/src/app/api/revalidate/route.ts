import { revalidateTag } from 'next/cache'

const DEFAULT_TAG = 'site-content'

const missingTokenResponse = Response.json(
  { error: 'Missing REVALIDATE_TOKEN' },
  { status: 500 },
)

const unauthorizedResponse = Response.json(
  { error: 'Invalid token' },
  { status: 401 },
)

export async function POST(request: Request): Promise<Response> {
  const secret = process.env.REVALIDATE_TOKEN
  if (!secret) {
    return missingTokenResponse
  }

  let providedToken: string | null = null
  let tag = DEFAULT_TAG

  try {
    const body = await request.json()
    providedToken = body?.token ?? null
    tag = body?.tag ?? DEFAULT_TAG
  } catch {
    const params = new URL(request.url).searchParams
    providedToken = params.get('token')
    tag = params.get('tag') ?? DEFAULT_TAG
  }

  if (providedToken !== secret) {
    return unauthorizedResponse
  }

  revalidateTag(tag)

  return Response.json({ revalidated: true, tag })
}

export function GET(request: Request): Promise<Response> {
  return POST(request)
}
