import {
  type ComponentPropsWithoutRef,
  type LinkHTMLAttributes,
  forwardRef,
} from 'react'
import NextLink from 'next/link.js'

export type LinkProps = ComponentPropsWithoutRef<typeof NextLink> &
  LinkHTMLAttributes<HTMLAnchorElement> & {
    target?: '_blank'
    rel?: string
  }

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...props }, ref) => (
    <NextLink ref={ref} {...props}>
      {children}
    </NextLink>
  )
)

Link.displayName = 'Link'
