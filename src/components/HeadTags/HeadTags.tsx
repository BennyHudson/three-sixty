import type { FC, ReactElement } from 'react'
import React from 'react'

import type { HeadTagsProps } from './HeadTags.types'

const HeadTags: FC<HeadTagsProps> = ({ seo }: HeadTagsProps): ReactElement => {
  return (
    <>
      {seo.title && <title>{seo.title}</title>}
      {seo.metaDesc && <meta name='description' content={seo.metaDesc} />}
      {seo.canonical && <link rel='canonical' href={seo.canonical} />}
      {seo.opengraphType && <meta property='og:type' content={seo.opengraphType} />}
      {seo.opengraphTitle && <meta property='og:title' content={seo.opengraphTitle} />}
      {seo.metaDesc && <meta property='og:description' content={seo.metaDesc} />}
      {seo.opengraphUrl && <meta property='og:url' content={seo.opengraphUrl} />}
      {seo.opengraphImage && <meta property='og:image' content={seo.opengraphImage?.sourceUrl} />}
      {seo.twitterTitle && <meta name='twitter:title' content={seo.twitterTitle} />}
      {seo.twitterDescription && <meta name='twitter:description' content={seo.twitterDescription} />}
      {seo.opengraphImage && <meta property='twitter:image' content={seo.opengraphImage?.sourceUrl} />}
      {seo.opengraphImage && <meta name='twitter:card' content={'summary'} />}
      {seo.schema && <script type='application/ld+json'>{JSON.stringify(seo.schema?.raw)}</script>}
      <meta name='facebook-domain-verification' content='gi3kxuiuwtgu0cmud909uuevfsyo6j' />
    </>
  )
}

export default HeadTags
