import { FC } from "react";
import styles from './Button.module.scss';

const button_types = {
  'info': 'button',
  'success': 'button-success',
  'error': 'button-error',
  'warning': 'button-warning',
  'primary': 'button-primary'
}

interface Props {
  type?: 'success' | 'info' | 'error' | 'warning' | 'primary'
  onClick?: () => void
  startIcon?: string
  endIcon?: string
}

const Button: FC<Props> = ({ children, type = 'info', onClick, startIcon, endIcon }) => {
  return (
    <button onClick={onClick} className={styles[button_types[type]]}>
      {startIcon && <img src={startIcon} alt='button start icon' className={styles.icon} />}
      {children && children}
      {endIcon && <img src={endIcon} alt='button end icon' className={styles.icon} />}
    </button>
  )
}

export default Button