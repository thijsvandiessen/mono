import { type AnchorHTMLAttributes, type ImgHTMLAttributes, forwardRef } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      href,
      prefetch: _prefetch,
      replace: _replace,
      scroll: _scroll,
      shallow: _shallow,
      ...props
    },
    ref,
  ) => (
    <a ref={ref} href={href} {...props}>
      {children}
    </a>
  ),
);

Link.displayName = "MockNextLink";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  unoptimized?: boolean;
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    { fill: _fill, priority: _priority, quality: _quality, unoptimized: _unoptimized, ...props },
    ref,
  ) => <img ref={ref} {...props} />,
);

Image.displayName = "MockNextImage";

export const notFound = () => {
  throw new Error("notFound() was called in Storybook");
};
