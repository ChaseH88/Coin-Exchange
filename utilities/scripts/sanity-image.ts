import { client } from 'lib/sanity';
import imageUrlBuilder from '@sanity/image-url'

/**
 * Initialize the Sanity image builder
 */
const builder = imageUrlBuilder(client);

/**
 * Generates a Sanity image URL from a Sanity image ID
 * @param source
 * @returns
 */
const sanityImage = (source, width: number = 200) => (
  builder.image(source).width(width).url()
)

export { sanityImage };
