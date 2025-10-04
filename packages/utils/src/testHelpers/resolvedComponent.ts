import type { ReactNode } from 'react'

export const resolvedComponent = async <T>(
  Component: (props: T) => Promise<ReactNode>,
  props: T
): Promise<() => ReactNode> => {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}
