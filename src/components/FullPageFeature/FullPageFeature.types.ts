export interface FullPageFeatureProps {
  title: string
  appearance?: 'primary' | 'secondary'
  background?: string
  subtitle?: string
  showOverlay?: boolean
  backgroundVideo?: {
    poster?: string
    mp4: string
    webm: string
  }
  size?: 1 | 2
}
