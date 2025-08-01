import NextImage from 'next/image.js'
import { forwardRef, type ComponentProps, type ImgHTMLAttributes } from 'react'

export type ImageProps = ComponentProps<typeof NextImage> &
  ImgHTMLAttributes<HTMLImageElement>

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(props, ref) {
    return <NextImage ref={ref} {...props} />
  }
)
