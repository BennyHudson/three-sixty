import type { ContentBlock, ImageBlock } from '@typings/PostContentBuilder.types'

export interface ArticleContentProps {
  content: ContentBlock[] | ImageBlock[]
}
