import { generateImageSizeProps, type Image } from '@/lib/sanity-image';
import { forwardRef, HTMLAttributes } from 'react';

interface SanityImageProps extends HTMLAttributes<HTMLImageElement> {
  image: Image;
  sizes?: string | undefined;
  maxWidth?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  isAboveTheFold?: boolean | undefined;
}

const SanityImage = forwardRef<HTMLImageElement, SanityImageProps>(
  (
    {
      image,
      sizes = undefined,
      maxWidth = undefined,
      width = undefined,
      height = undefined,
      isAboveTheFold = false,
      ...props
    },
    ref,
  ) => (
    <img
      style={{
        backgroundColor: image.asset.metadata.palette.dominant.background,
      }}
      alt={image.alt}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      decoding={isAboveTheFold ? 'sync' : 'async'}
      {...generateImageSizeProps({ image, sizes, maxWidth, width, height })}
      ref={ref}
      {...props}
    />
  ),
);
SanityImage.displayName = 'SanityImage';

export default SanityImage;
