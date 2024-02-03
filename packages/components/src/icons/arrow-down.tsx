import classNames from 'classnames'
import styles from './styles.module.scss'

export const ArrowDown = ({ className }: { className?: string }) => (
  <svg
    className={classNames(className, styles.icon)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    aria-hidden="true"
  >
    <g fill="currentColor">
      <path d="M11.2 18.5V5.4c0-.2.4-.4.8-.4s.7.2.7.4v13.1c0 .3-.4.5-.8.5-.3 0-.7-.2-.7-.5z" />
      <path d="M5.8 13.8c0-.4.4-.8.8-.8.2 0 .4.1.5.2l4.9 4.9 4.9-4.9c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-5.4 5.4c-.3.3-.8.3-1.1 0L6 14.3c-.1-.1-.2-.3-.2-.5z" />{' '}
    </g>
  </svg>
)
