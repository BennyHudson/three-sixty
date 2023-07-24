export interface VideoPlayerProps {
  videoSource: 'youtube' | 'vimeo'
  videoId: string
  aspectRatio?: '16/9' | '1/1'
}
