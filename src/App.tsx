import { EmptyList } from './components/EmptyList'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { Task } from './components/Task'
import './global.css'

function App() {
  return (
    <>
      <Header />
      {/* <EmptyList /> */}
      <InputTask />
      <Task id={''} taskText={''} onClickTask={function (clickedTaskId: string): void {
        throw new Error('Function not implemented.')
      }} onDeleteTask={function (taskToDeleteId: string): void {
        throw new Error('Function not implemented.')
      }} />
    </>
  )
}

export default App
