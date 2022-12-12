import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import client from '../lib/sanity'

export const useSanityImage = () => {
  const builder = imageUrlBuilder(client)
  
  const urlFor = (source: SanityImageSource) => {
    return builder.image(source)
  }

  return {
    urlFor
  }
}
