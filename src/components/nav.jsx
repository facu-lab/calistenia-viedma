import { Link } from "react-router-dom"
import "../styles/nav.css"


const Nav=()=>{
  
  return(
    <nav>
      <div >
      <Link className="logoCV" to='/'>Home</Link>
      </div>
      <ul className="menu">
        <li><Link className="linkNav" to='/Entrenamientos'>Entrenamientos</Link></li>
        <li><Link className="linkNav" to='/Gymnacios'>Gymnacios</Link></li>
        <li><Link className="linkNav" to='/Nosotros'>Nosotros</Link></li>
        <li><Link className="linkNav" to='/Informacion'>Informacion</Link></li>
        <li><Link className="linkNav" to='/Usuario'>Usuario</Link></li>
      </ul>

    </nav>    
  )
}

export default Nav