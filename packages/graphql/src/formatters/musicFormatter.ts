import type { Music } from '../types/music'
import type { MusicFragment } from '../generated/graphql'

export const musicFormatter = (music: MusicFragment): Music => ({
  id: music.id,
  title: music.title ?? '',
  composer: music.composer ?? '',
})
