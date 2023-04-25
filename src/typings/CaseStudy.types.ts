import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface CaseStudyProps {
  title: string
  uri: string
  featuredImage: {
    node: {
      localFile: IGatsbyImageData
    }
  }
  workTypes: {
    nodes: {
      name: string
    }[]
  }
}
