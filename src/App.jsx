import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Entrenamientos from './pages/entrenamientos'
import Nav from './components/nav'
import Gymnacios from './pages/gymnacios'
import Nosotros from './pages/nosotros'
import Informacion from './pages/informacion'
import Usuario from './pages/usuario'
import Header from './components/header'

function App() {

  return (
    <main>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Entrenamientos' element={<Entrenamientos />} />
          <Route path='/Gymnacios' element={<Gymnacios />} />
          <Route path='/Nosotros' element={<Nosotros/>} />
          <Route path='/Informacion' element={<Informacion />} />
          <Route path='/Usuario' element={<Usuario />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
