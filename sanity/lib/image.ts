import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}

// 1200x630 crop for social / Open Graph share cards.
export const urlForOgImage = (source: Image) => {
  return imageBuilder
    ?.image(source)
    .width(1200)
    .height(630)
    .fit('crop')
    .auto('format')
    .url()
}
