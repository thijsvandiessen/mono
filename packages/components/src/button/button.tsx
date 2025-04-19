import type { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

export interface Props {
  className?: string
  href?: string
  children: ReactNode
  target?: string
  rel?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  suffix?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Button = ({
  className,
  href = '',
  children,
  target,
  rel,
  leftIcon,
  rightIcon,
  suffix,
  variant = 'primary',
}: Props) => {
  return (
    <a
      className={classNames(
        className,
        styles.button,
        styles[variant],
        'text-small'
      )}
      href={href}
      target={target}
      rel={rel}
    >
      {leftIcon}
      <span>
        {children} <span className={styles.suffix}>{suffix}</span>
      </span>
      {rightIcon}
    </a>
  )
}
