import { useState } from "react"
import styles from './styles.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function InputTask() {

  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(data: any) {
    console.log(data)
  }

  function handleNewTaskChange() {

  }

  return (
    <div className={styles.container} >
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input
          name="newToDo"
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          // onInvalid={handleNewTaskInvalid}
          required
        />

        <button type="submit">
          <span>Criar</span>
          <PlusCircle size={16} />
        </button>
      </form>
    </ div>
  )
}