import { ChangeEvent, FormEvent } from "react"
import styles from './styles.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid'

interface InputTaskProps {
  newTask: string;
  setNewTask: (value: string) => void
  setTaskList: (value: any) => void
}

export function InputTask({ newTask, setNewTask, setTaskList }: InputTaskProps) {

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTaskList((prevState: any) => [
      ...prevState,
      { id: uuidv4(), text: newTask, isDone: false },
    ])

    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
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
          onInvalid={handleNewTaskInvalid}
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