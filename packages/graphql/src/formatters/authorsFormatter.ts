import type { Author } from '../types/author'
import type { AuthorFragment } from '../generated/graphql'
import { authorFormatter } from './authorFormatter'

export const authorsFormatter = (data: AuthorFragment[]): Author[] => {
  return data.map((author) => authorFormatter(author))
}
