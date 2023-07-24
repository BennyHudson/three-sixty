import { HeadTagsProps } from '@components/HeadTags/HeadTags.types'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface CaseStudyProps {
  title: string
  uri: string
  secondaryFeature: {
    secondaryFeature: {
      localFile: IGatsbyImageData
      sourceUrl: string
    }
  }
  featuredImage: {
    node: {
      localFile: IGatsbyImageData
      sourceUrl: string
    }
  }
  brandLinks: {
    brandLinks: {
      text: string
      url: string
    }[]
  }
  workTypes: {
    nodes: {
      name: string
    }[]
  }
  tags: {
    nodes: {
      name: string
    }[]
  }
  seo: HeadTagsProps['seo']
}
