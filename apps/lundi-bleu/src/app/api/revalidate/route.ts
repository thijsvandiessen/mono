import { NextResponse } from 'next/server.js'
import { revalidateTag } from 'next/cache.js'

function revalidate() {
  revalidateTag('site-content', 'max')

  fetch('https://webhooks.datocms.com/lIkDB28WrL/deploy-results', {
    method: 'POST',
    body: JSON.stringify({ status: 'success' }),
  })

  return NextResponse.json({ revalidated: true })
}

export function POST() {
  return revalidate()
}

export function GET() {
  return revalidate()
}
