import NextLink from 'next/link.js'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import { type ReactNode } from 'react'

export type LinkProps = ComponentPropsWithoutRef<typeof NextLink> & {
  children?: ReactNode
  className?: string
  target?: string
  rel?: string
  href: string
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...props }, ref) => (
    <NextLink ref={ref} {...props}>
      {children}
    </NextLink>
  )
)
