import { NextResponse } from 'next/server.js'
import { revalidateTag } from 'next/cache.js'

export function POST() {
  revalidateTag('content', 'max')
  return NextResponse.json({ revalidated: true })
}

export function GET() {
  revalidateTag('content', 'max')
  return NextResponse.json({ revalidated: true })
}
