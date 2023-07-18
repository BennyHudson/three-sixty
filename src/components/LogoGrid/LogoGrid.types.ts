import type { IGatsbyImageData } from 'gatsby-plugin-image'

import type { SectionProps } from '@components/Section/Section.types'

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
  feature?: boolean
  paddingLevel?: SectionProps['paddingLevel']
}
