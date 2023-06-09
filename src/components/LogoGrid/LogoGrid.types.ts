import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface LogoGridProps {
  logos: {
    clientName: string
    logo: {
      localFile: IGatsbyImageData
    }
  }[]
  carousel?: boolean
  title?: string
  extraMargin?: boolean
  extraMarginBottom?: boolean
}
