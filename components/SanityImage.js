import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { client } from '../lib/client';

const SanityImage = ({ asset, alt }) => {
  const imageProps = useNextSanityImage(client, asset);
  if (!imageProps) return null
  return (
    <Image 
      {...imageProps} 			
      style={{ width: '100%', height: '100%', objectFit:'cover' }} 
      loader={imageProps.loader}
      sizes='100vw'
      alt={alt}
      priority 
    />
  )
}

export default SanityImage