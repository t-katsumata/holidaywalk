import { siteMeta } from "./constans";
const {
  siteTitle,
  siteDesc,
  siteUrl,
  siteLocale,
  siteType,
} = siteMeta

import siteImg from '@/images/ogp.png'

export const baseMetadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: './',
  },
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDesc,
}

export const openGraphMetadata = {
  title: siteTitle,
  description: siteDesc,
  url: siteUrl,
  siteName: siteTitle,
  images: [
    {
      url: siteImg.src,
      width: siteImg.width,
      height: siteImg.height,
    },
  ],
  locale: siteLocale,
  type: siteType,
}

export const twitterMetadata = {
  card: 'summary_large_image',
  title: siteTitle,
  description: siteDesc,
  images: [siteImg.src],
}