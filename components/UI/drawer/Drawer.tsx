import { FC } from "react"
import Button from "../button/Button";
import styles from './Drawer.module.scss';

interface Props {
  open: boolean
}

const Drawer: FC<Props> = ({ open, children }) => {
  return (
    <div className={styles.drawer} style={!open ? { width: '0' } : {}}>
      {children}
    </div>
  )
}

export default Drawer