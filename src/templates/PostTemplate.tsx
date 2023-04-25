import FullPageFeature from '@components/FullPageFeature/FullPageFeature'
import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

interface PostTemplateProps {
  data: {
    allWpPost: {
      nodes: {
        title: string
        featuredImage: {
          node: {
            sourceUrl: string
          }
        }
      }[]
    }
  }
}

const PostTemplate: FC<PostTemplateProps> = ({ data }: PostTemplateProps): ReactElement => {
  const article = data.allWpPost.nodes[0]
  return (
    <>
      <FullPageFeature title={article.title} background={article.featuredImage.node.sourceUrl} />
    </>
  )
}

export default PostTemplate

export const caseStudyQuery = graphql`
  query($id: String!) {
    allWpPost(filter: { id: { eq: $id } }) {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`