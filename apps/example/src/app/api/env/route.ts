import { type NextRequest } from 'next/server'
import { envAllowList } from './envAllowList'

export function GET(request: NextRequest) {
  const entries = request.nextUrl.searchParams.entries()

  for (const [key] of entries) {
    if (!envAllowList.includes(key as 'GOOGLE_MAPS_API_KEY' | 'TEST'))
      return Response.json({ message: 'invalid request' })
    return Response.json({ [key]: process.env[key] })
  }

  return Response.json({ message: 'searchParams missing' })
}
