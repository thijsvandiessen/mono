import classNames from 'classnames'
import styles from './styles.module.scss'

export const Hamburger = ({ className }: { className?: string }) => (
  <svg
    className={classNames(className, styles.icon)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    aria-hidden="true"
  >
    <path
      d="M21.82 6.18H2.18C.98 6.18 0 5.2 0 4c0-1.2.98-2.18 2.18-2.18h19.64C23.02 1.82 24 2.8 24 4c0 1.2-.98 2.18-2.18 2.18zM21.82 22.18H2.18C.98 22.18 0 21.2 0 20c0-1.2.98-2.18 2.18-2.18h19.64c1.2 0 2.18.98 2.18 2.18 0 1.2-.98 2.18-2.18 2.18zM21.82 14.18H2.18C.98 14.18 0 13.2 0 12c0-1.2.98-2.18 2.18-2.18h19.64c1.2 0 2.18.98 2.18 2.18 0 1.2-.98 2.18-2.18 2.18z"
      fill="currentColor"
    />
  </svg>
)
