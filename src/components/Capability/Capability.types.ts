import type { PanelProps } from '@components/Panel/Panel.types'

export interface CapabilityProps {
  appearance: PanelProps['appearance']
  inverse: boolean
  title: string
  content: string
  microservices: {
    title: string
  }[]
  backgroundImage: {
    sourceUrl: string
  }
}
