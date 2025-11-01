import { type ComponentProps, type ImgHTMLAttributes, forwardRef } from 'react'
import NextImage from 'next/image.js'

export type ImageProps = ComponentProps<typeof NextImage> &
  ImgHTMLAttributes<HTMLImageElement>

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(props, ref) {
    return <NextImage ref={ref} {...props} />
  }
)
