import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Link from '@components/Link'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

import { PostProps } from '@typings/Post.types'

import * as Styled from './styles/PostExcerpt.style'

const PostExcerpt: FC<PostProps> = ({ title, uri, featuredImage, excerpt }: PostProps): ReactElement => {
  const image = getImage(featuredImage.node.localFile)

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
