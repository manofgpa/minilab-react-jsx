import "bootstrap/dist/css/bootstrap.min.css"
import { EmotionMeter } from './EmotionMeter'
import { Greeting } from './Greeting'
import { Profile } from './Profile'
import { ToDoList } from './ToDoList'

// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      <Greeting />
      <small>Imagens</small>
      <Profile />
      <hr />
      <small>Renderização de listas</small>
      <ToDoList />
      <hr />
      <small>Renderização condicional</small>
      <EmotionMeter />
      <hr />
    </div>
  )
}

export default App
