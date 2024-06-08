'use client'

import { useRef, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useIntersectionObserver } from '@mono/hooks'
import { Play } from '../icons/play'

import styles from './styles.module.scss'

type Props = {
  children: ReactNode
  aspectRatio?: string
  renderPlayButton?: boolean
  showPlayIcon?: boolean
  onPlayButtonClick?: () => void
}

export const VideoPlaceholder = ({
  children,
  aspectRatio = '16 / 9',
  renderPlayButton,
  showPlayIcon,
  onPlayButtonClick,
}: Props) => {
  const [hasIntersected, setHasIntersected] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [entry] = useIntersectionObserver({
    enabled: true,
    ref: containerRef,
  })

  useEffect(() => {
    if (entry?.isIntersecting) {
      setHasIntersected(true)
    }
  }, [entry?.isIntersecting])

  return (
    <div ref={containerRef} className={styles.root} style={{ aspectRatio }}>
      {hasIntersected ? children : null}

      {renderPlayButton && (
        <button
          className={styles.playButton}
          onClick={onPlayButtonClick}
          type="button"
          aria-label="Start video"
        >
          {showPlayIcon && (
            <div className={styles.playButtonIconContainer}>
              <Play />
            </div>
          )}
        </button>
      )}
    </div>
  )
}
