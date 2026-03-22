import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import settings from './settings'
import homepage from './homepage'
import countryPage from './countryPage'
import { articleHubSchemaTypes } from './articleHubSchema'

export const schemaTypes = [
  post,
  author,
  category,
  settings,
  blockContent,
  homepage,
  countryPage,
  ...articleHubSchemaTypes,
]