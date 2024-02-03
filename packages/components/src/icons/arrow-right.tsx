import classNames from 'classnames'
import styles from './styles.module.scss'

export const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    className={classNames(className, styles.icon)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    aria-hidden="true"
  >
    <g fill="currentColor">
      <path d="M23.22 12.84H.78a.781.781 0 0 1 0-1.56h22.45c.43 0 .78.35.78.78-.01.43-.36.78-.79.78z" />
      <path d="M17.8 18.27c-.43 0-.78-.35-.78-.78 0-.21.08-.4.23-.55l4.88-4.88-4.88-4.88a.785.785 0 0 1-.03-1.1c.29-.31.79-.32 1.1-.03l.03.03 5.43 5.43c.3.3.3.79 0 1.1l-5.43 5.43a.78.78 0 0 1-.55.23z" />
    </g>
  </svg>
)
