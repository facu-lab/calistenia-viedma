import { Link } from "react-router-dom"


const Nav=()=>{
  
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/Entrenamientos'>Entrenamientos</Link>
      <Link to='/Gymnacios'>Gymnacios</Link>
      <Link to='/Nosotros'>Nosotros</Link>
      <Link to='/Informacion'>Informacion</Link>
    </nav>    
  )
}

export default Nav