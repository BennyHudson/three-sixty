import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface SimpleCardProps {
  title: string
  uri?: string
  featuredImage: IGatsbyImageData
  secondaryHeading?: string | string[]
}
