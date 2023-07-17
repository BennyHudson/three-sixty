export interface HeadTagsProps {
  seo: {
    title: string
    metaDesc: string
    canonical: string
    opengraphType: string
    opengraphTitle: string
    opengraphUrl: string
    opengraphImage: {
      sourceUrl: string
    }
    twitterTitle: string
    twitterDescription: string
    schema: {
      raw: string
    }
  }
}
