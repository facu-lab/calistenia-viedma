import { Link } from "react-router-dom"
import "../styles/nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/iconoViedmaReal.png"
 
const barsMenu=<FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#ffffff",}} />;


const Nav=()=>{
  
  return(
    <nav>
      <div className="contenedor-logoCV">
        <Link className="logoCV" to='/'><img src={logo} /></Link>
      </div>
      <div className="barsMenu">{barsMenu}</div>
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