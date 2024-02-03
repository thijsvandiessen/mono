import type { Author } from '../types/author'
import type { AuthorFragment } from '../generated/graphql'

export const authorFormatter = (person: AuthorFragment): Author => ({
  id: person.id,
  name: person.name ?? '',
  description: person.role ?? '',
})
