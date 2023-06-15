import type { PanelProps } from '@components/Panel/Panel.types'

export interface CapabilityProps {
  appearance: PanelProps['appearance']
  title: string
  content: string
  microservices: {
    title: string
  }[]
}
