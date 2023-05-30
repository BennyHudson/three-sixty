import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ContentBlock {
  fieldGroupName: 'Post_Articlecontent_PostContentBuilder_ContentBlock'
  content: string
}

export interface ImageBlock {
  fieldGroupName: 'Post_Articlecontent_PostContentBuilder_ImageBlock'
  image: {
    localFile: IGatsbyImageData
  }
}
