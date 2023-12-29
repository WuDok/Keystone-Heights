import Image from 'next/image'

interface MDXImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export function MDXImage({ src, alt, width, height }: MDXImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ width: '100%', height: 'auto' }}
      layout="responsive"
    />
  )
}
