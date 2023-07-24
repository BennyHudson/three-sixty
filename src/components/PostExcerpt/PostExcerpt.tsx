import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import Heading from '@components/Heading'
import Link from '@components/Link'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

import type { PostProps } from '@typings/Post.types'

import * as Styled from './styles/PostExcerpt.style'

const PostExcerpt: FC<PostProps> = ({ title, uri, secondaryFeature, excerpt }: PostProps): ReactElement => {
  const image = getImage(secondaryFeature.secondaryFeature.localFile)

  return (
    <Styled.PostExcerpt>
      <Link to={uri}>
        <GatsbyImage image={image!} alt={title} />
      </Link>
      <Styled.Content>
        <Heading size={2} text={title} noMargin />
        <RawHtmlWrapper content={excerpt} />
        <Link to={uri} text='Read More' />
      </Styled.Content>
    </Styled.PostExcerpt>
  )
}

export default PostExcerpt
