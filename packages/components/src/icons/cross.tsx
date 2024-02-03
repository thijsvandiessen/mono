import classNames from 'classnames'
import styles from './styles.module.scss'

export const Cross = ({ className }: { className?: string }) => (
  <svg
    className={classNames(className, styles.icon)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    aria-hidden="true"
  >
    <g fill="currentColor">
      <path d="M22.31 5.38 5.38 22.31c-.93.93-2.43.93-3.35 0l-.34-.34a2.36 2.36 0 0 1 0-3.35L18.62 1.69a2.36 2.36 0 0 1 3.35 0l.34.34c.92.92.92 2.43 0 3.35z" />
      <path d="M18.61 22.3 1.7 5.39c-.93-.93-.93-2.45 0-3.38l.31-.31c.93-.93 2.45-.93 3.38 0L22.3 18.61c.93.93.93 2.45 0 3.38l-.31.31c-.93.93-2.44.93-3.38 0z" />
    </g>
  </svg>
)
