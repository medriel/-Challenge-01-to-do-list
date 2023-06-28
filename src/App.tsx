import { EmptyList } from './components/EmptyList'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { Task } from './components/Task'
import './global.css'
import styles from './App.module.css'
import { useEffect, useState } from 'react'

interface ITaskList {
  id: string
  text: string
  isDone: boolean
}

function App() {
  const [taskList, setTaskList] = useState<ITaskList[]>([])
  const [newTask, setNewTask] = useState('')
  const [concludedTasksCount, setConcludedTasksCount] = useState(0)


  function handleOnClickTask(clickedTaskId: string) {
    const clickedTaskIndex = taskList.findIndex(
      (task) => task.id === clickedTaskId,
    )

    const tasks = [...taskList]

    tasks[clickedTaskIndex].isDone = !tasks[clickedTaskIndex].isDone

    setTaskList(tasks)
    calculateMetrics(tasks)
  }

  function handleOnDeleteTask(taskToDeleteId: string) {
    const newTaskListWithoutDeletedTask = taskList.filter(
      (task) => task.id !== taskToDeleteId,
    )

    const newTaskList = [...newTaskListWithoutDeletedTask]

    setTaskList(newTaskList)
    calculateMetrics(newTaskList)
  }

  function calculateMetrics(newTaskList: ITaskList[]) {
    const totalOfConcludedTasks = newTaskList.reduce(
      (total, task) => (task.isDone ? total + 1 : total),
      0,
    )

    setConcludedTasksCount(totalOfConcludedTasks)
  }

  useEffect(() => {
    calculateMetrics(taskList)
  }, [taskList])

  return (
    <>
      <Header />
      <div className={styles.teste}>
        <InputTask newTask={newTask} setNewTask={setNewTask} setTaskList={setTaskList} />
        <div className={styles.content}>
          <div className={styles.metrics}>
            <div>
              <strong className={styles.createdTasks}>Tarefas criadas</strong>
              <div className={styles.tasksCount}>
                <span>{taskList.length}</span>
              </div>
            </div>

            <div>
              <strong className={styles.concludedTasks}>Concluídas</strong>
              <div className={styles.tasksCount}>
                <span>
                  {concludedTasksCount} de {taskList.length}
                </span>
              </div>
            </div>
          </div>
          <div>
            {taskList.length === 0 ? (
              <EmptyList />
            ) : (
              taskList.map(({ id, text, isDone }) => (
                <Task
                  key={id}
                  id={id}
                  taskText={text}
                  isDone={isDone}
                  onClickTask={handleOnClickTask}
                  onDeleteTask={handleOnDeleteTask}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App