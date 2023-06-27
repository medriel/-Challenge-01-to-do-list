import logo from '../../assets/ToDoList-logo.svg'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Ignite ToDo Logo" />
    </header>
  )
}