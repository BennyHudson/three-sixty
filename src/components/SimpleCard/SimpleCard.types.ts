import type { IGatsbyImageData } from 'gatsby-plugin-image'
import type { ReactNode } from 'react'

export interface SimpleCardProps {
  title: string
  uri?: string
  featuredImage: IGatsbyImageData
  secondaryHeading?: string | string[]
}
