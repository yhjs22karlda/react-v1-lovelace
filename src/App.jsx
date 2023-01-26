import './App.css'
import Images from './Images'
import About from './About'

function App() {
  const name = "Ada Lovelace"
  return (
    <div className="App">
      <h1>{name}</h1>
      <Images />
      <About />
    </div>
  )
}

export default App
