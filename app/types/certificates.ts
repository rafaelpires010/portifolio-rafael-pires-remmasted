import type { RichTextContent } from '@graphcms/rich-text-types'
import { Technology } from './projects'

export type Certificate = {
  thumbnail: {
    url: string
  }
  title: string
  instituition: string
  technologies: Technology[]
  description: {
    raw: RichTextContent
  }
  url: string
}
