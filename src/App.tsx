import { EmptyList } from './components/EmptyList'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <EmptyList />
      <InputTask />
    </>
  )
}

export default App
