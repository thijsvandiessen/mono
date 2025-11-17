import type { NextRequest } from 'next/server'
import { handleRevalidateRequest } from '@mono/next-js'

export function POST(request: NextRequest) {
  return handleRevalidateRequest(request)
}

export function GET(request: NextRequest) {
  return handleRevalidateRequest(request)
}

