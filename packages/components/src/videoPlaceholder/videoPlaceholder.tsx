"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { Play } from "../icons/index.js";
import styles from "./styles.module.scss";
import { useIntersectionObserver } from "@mono/hooks";
import { useTranslations } from "next-intl";

type Props = {
  children: ReactNode;
  aspectRatio?: string;
  renderPlayButton?: boolean;
  showPlayIcon?: boolean;
  onPlayButtonClick?: () => void;
};

export const VideoPlaceholder = ({
  children,
  aspectRatio = "16 / 9",
  renderPlayButton,
  showPlayIcon,
  onPlayButtonClick,
}: Props) => {
  const t = useTranslations("VideoPlaceholder");
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [entry] = useIntersectionObserver({
    enabled: true,
    ref: containerRef,
  });

  useEffect(() => {
    if (!entry?.isIntersecting) return;

    const raf = requestAnimationFrame(() => {
      setHasIntersected(true);
    });

    return () => cancelAnimationFrame(raf);
  }, [entry?.isIntersecting]);
  return (
    <div ref={containerRef} className={styles.root} style={{ aspectRatio }}>
      {hasIntersected ? children : null}

      {renderPlayButton && (
        <button
          className={styles.playButton}
          onClick={onPlayButtonClick}
          type="button"
          aria-label={t("play")}
        >
          {showPlayIcon && (
            <div className={styles.playButtonIconContainer}>
              <Play />
            </div>
          )}
        </button>
      )}
    </div>
  );
};
