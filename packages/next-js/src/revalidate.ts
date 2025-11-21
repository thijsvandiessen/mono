import { NextResponse, type NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

const DEFAULT_TAG = 'site-content'

export type RevalidateHandlerOptions = {
  secret?: string
  defaultTag?: string
}

export async function handleRevalidateRequest(
  request: NextRequest,
  options?: RevalidateHandlerOptions
): Promise<NextResponse> {
  const secret = options?.secret ?? process.env.REVALIDATE_TOKEN
  if (!secret) {
    return NextResponse.json(
      { error: 'Missing REVALIDATE_TOKEN' },
      { status: 500 }
    )
  }

  let providedToken: string | null = null
  let tag = options?.defaultTag ?? DEFAULT_TAG

  try {
    const body = await request.json()
    providedToken = body?.token ?? null
    tag = body?.tag ?? tag
  } catch {
    const params =
      request.nextUrl?.searchParams ?? new URL(request.url).searchParams
    providedToken = params.get('token')
    tag = params.get('tag') ?? tag
  }

  if (providedToken !== secret) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  revalidateTag(tag, 'max')

  return NextResponse.json({ revalidated: true, tag })
}
