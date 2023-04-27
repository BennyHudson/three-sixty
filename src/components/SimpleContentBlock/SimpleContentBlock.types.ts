import type { ReactNode } from "react"

export interface SimpleContentBlockProps {
  inverse?: boolean
  heading: string
  content?: string
  children?: ReactNode
}
