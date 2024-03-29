'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import type { VideoFragment } from '@crea/graphql/src/generated/graphql'
import { VideoPlaceholder } from '../videoPlaceholder'
import { formatCloudinaryImage } from '@crea/graphql/src/formatters/formatCloudinaryImage'
import { isOfTypeCloudinaryAsset } from '@crea/graphql/src/types/image'

import styles from './styles.module.scss'

type Props = {
  record: VideoFragment
  autoplay?: boolean
  aspectRatio?: string
}

export const VideoBlock = ({ record, autoplay, aspectRatio }: Props) => {
  const [hasPlayed, setHasPlayed] = useState(autoplay)
  const binaryAutoplay = autoplay ? 1 : 0
  const { media: video, thumbnail } = record

  const toggleVideoPlay = useCallback(() => {
    if (!hasPlayed) {
      setHasPlayed(true)
    }
  }, [hasPlayed])

  const handlePlayButtonClick = useCallback(() => {
    toggleVideoPlay()
  }, [toggleVideoPlay])

  if (!video) {
    return null
  }

  const asset = formatCloudinaryImage(
    isOfTypeCloudinaryAsset(thumbnail?.asset) ? thumbnail?.asset : undefined
  )

  const videoUrl = () => {
    switch (video.provider) {
      case 'vimeo':
        return `https://player.vimeo.com/video/${video.providerUid}?autoplay=1&muted=${binaryAutoplay}&loop=${binaryAutoplay}`
      case 'youtube':
        return `https://www.youtube.com/embed/${
          video.providerUid
        }?autoplay=1&mute=${binaryAutoplay}&loop=${binaryAutoplay}&controls=${
          autoplay ? 0 : 1
        }&playlist=${video.providerUid}`
      default:
        console.error(`unsupported video provider: ${video.provider}`)
        return ''
    }
  }

  return (
    <VideoPlaceholder
      renderPlayButton={!hasPlayed}
      showPlayIcon
      onPlayButtonClick={handlePlayButtonClick}
      aspectRatio={aspectRatio}
    >
      <figure className={styles.iframeContainer}>
        {!hasPlayed && asset && (
          <Image
            src={asset.url}
            width={asset.width}
            height={asset.height}
            className={styles.thumbnail}
            alt=""
          />
        )}

        {!hasPlayed && !thumbnail && video.thumbnailUrl && (
          // Domain of the video thumbnailUrl is unknown so we use an
          // img tag if the thumbnail is not defined
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumbnailUrl}
            className={styles.thumbnail}
            alt=""
            loading="lazy"
          />
        )}

        {hasPlayed && (
          <iframe
            className={styles.iframe}
            title={video.title || ''}
            src={videoUrl()}
            allowFullScreen
            allow="autoplay"
          />
        )}
        <figcaption className="sr-only">{video.title}</figcaption>
      </figure>
    </VideoPlaceholder>
  )
}
