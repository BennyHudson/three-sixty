import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface PostProps {
  title: string
  uri: string
  excerpt: string
  featuredImage: {
    node: {
      localFile: IGatsbyImageData
    }
  }
}
