import React from 'react'
import type { FC, ReactElement } from 'react'

import Container from '@components/Container/Container'
import Heading from '@components/Heading/Heading'
import Overlay from '@components/Overlay/Overlay'

import type { FullPageFeatureProps } from './FullPageFeature.types'
import * as Styled from './styles/FullPageFeature.style'

const FullPageFeature: FC<FullPageFeatureProps> = ({
  title,
  appearance = 'primary',
  background,
  subtitle,
  showOverlay = true,
  backgroundVideo,
}: FullPageFeatureProps): ReactElement => {
  return (
    <Styled.FullPageFeature appearance={appearance} background={background}>
      <Container>
        <div className='animate__animated animate__fadeInUp'>
          <Heading text={title} size={5} inverse={appearance === 'primary' || !!background} weight={2} noMargin />
          {subtitle && <Heading text={subtitle} size={1} inverse={appearance === 'primary' || !!background} weight={3} noMargin />}
        </div>
      </Container>
      {showOverlay && <Overlay />}
      {backgroundVideo && (
        <Styled.BackgroundVideo autoPlay loop muted playsInline poster={backgroundVideo.poster}>
          <source src={backgroundVideo.mp4} type='video/mp4' />
          <source src={backgroundVideo.webm} type='video/webm' />
        </Styled.BackgroundVideo>
      )}
    </Styled.FullPageFeature>
  )
}

export default FullPageFeature
