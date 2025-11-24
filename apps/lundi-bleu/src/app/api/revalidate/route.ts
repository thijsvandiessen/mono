import { NextResponse } from 'next/server.js'
import { revalidateTag } from 'next/cache.js'

export function POST() {
  revalidateTag('site-content', 'max')
  return NextResponse.json({ revalidated: true })
}

export function GET() {
  revalidateTag('site-content', 'max')
  return NextResponse.json({ revalidated: true })
}
