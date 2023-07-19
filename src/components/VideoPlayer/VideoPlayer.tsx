import type { FC, ReactElement } from 'react'
import React from 'react'

import type { VideoPlayerProps } from './VideoPlayer.types'
import * as Styled from './styles/VideoPlayer.style'

const VideoPlayer: FC<VideoPlayerProps> = ({ videoSource, videoId }: VideoPlayerProps): ReactElement => {
  if (videoSource === 'youtube') {
    return (
      <Styled.VideoPlayer>
        <iframe
          width='480'
          height='480'
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </Styled.VideoPlayer>
    )
  }

  return (
    <Styled.VideoPlayer>
      <iframe
        title='vimeo-player'
        src={`https://player.vimeo.com/video/${videoId}?h=a6fda96fc0&autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&muted=1`}
        width='640'
        height='360'
        frameBorder='0'
        allowFullScreen
      />
    </Styled.VideoPlayer>
  )
}

export default VideoPlayer
