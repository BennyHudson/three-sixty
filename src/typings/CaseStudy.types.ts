import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface CaseStudyProps {
  title: string
  uri: string
  featuredImage: {
    node: {
      localFile: IGatsbyImageData
      sourceUrl: string
    }
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
}
