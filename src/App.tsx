import { EmptyList } from './components/EmptyList'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { Task } from './components/Task'
import './global.css'
import styles from './app.module.css'

function App() {
  return (
    <>
      <Header />
      {/* <EmptyList /> */}

      {/*<Task id={''} taskText={''} onClickTask={function (clickedTaskId: string): void {
        throw new Error('Function not implemented.')
      }} onDeleteTask={function (taskToDeleteId: string): void {
        throw new Error('Function not implemented.')
      }} /> */}
      <div className={styles.teste}>
        <InputTask />
        <div className={styles.content}>
          <div className={styles.metrics}>
            <div>
              <strong className={styles.createdTasks}>Tarefas criadas</strong>
              <div className={styles.tasksCount}>
                <span>2</span>
              </div>
            </div>

            <div>
              <strong className={styles.concludedTasks}>Concluídas</strong>
              <div className={styles.tasksCount}>
                <span>
                  2 de 5
                </span>
              </div>
            </div>
          </div>
          <div>
            <EmptyList />
            {/* <Task/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
// {
//   <>
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.metrics}>
//           <div>
//             <strong className={styles.createdTasks}>Tarefas criadas</strong>
//             <div className={styles.tasksCount}>
//               <span>{taskList.length}</span>
//             </div>
//           </div>

//           <div>
//             <strong className={styles.concludedTasks}>Concluídas</strong>
//             <div className={styles.tasksCount}>
//               <span>
//                 {concludedTasksCount} de {taskList.length}
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className={styles.taskList}>
//           {taskList.length === 0 ? (
//             <EmptyList />
//           ) : (
//             taskList.map(({ id, text, isDone }) => (
//               <Tasks
//                 key={id}
//                 id={id}
//                 taskText={text}
//                 isDone={isDone}
//                 onClickTask={handleOnClickTask}
//                 onDeleteTask={handleOnDeleteTask}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </div>

//   </>
// }