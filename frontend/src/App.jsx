import './App.css'
import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes'

function App() {
  console.log('NavBar:', NavBar); // Adicionando log para verificar a importação do NavBar
  
  return (
    <>
      <NavBar/>
      <AppRoutes/>
    </>
  )
}

export default App
