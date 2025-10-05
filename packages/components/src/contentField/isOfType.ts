import type { CdaStructuredTextRecord } from 'datocms-structured-text-utils'

export function isOfType<T extends CdaStructuredTextRecord>(
  x: T | CdaStructuredTextRecord,
  typename: string
): x is T {
  if (x.__typename === typename) return true
  return false
}
