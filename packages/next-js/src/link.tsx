import NextLink from 'next/link.js'
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type LinkHTMLAttributes,
} from 'react'

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
