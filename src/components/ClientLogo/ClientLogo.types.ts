import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ClientLogoProps {
  logo: {
    localFile: IGatsbyImageData
    title: string
  }
}
