import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface CapabilityProps {
  title: string
  content: string
  microservices: {
    title: string
  }[]
  backgroundImage: {
    localFile: IGatsbyImageData
  }
  animate: boolean
}
