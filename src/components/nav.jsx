import { Link } from "react-router-dom"
import "../styles/nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/iconoViedmaReal.png"
import React, { useState } from "react"
 
const barsMenu=<FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#ffffff",}} />;


const Nav=()=>{

  const [stateBar, setStateBar]= useState(false);

  return(
    <nav>
      <div className="contenedor-logoCV">
        <Link className="logoCV" to='/'><img src={logo} /></Link>
      </div>
      <div onClick={()=>{stateBar?setStateBar(false):setStateBar(true)}} className="barsMenu">{barsMenu}</div>
      <ul className={stateBar?"menu":"menu noMenu"}>
        <li><Link className="linkNav" to='/Entrenamientos'><div className="iconLinkNav"><FontAwesomeIcon icon="fa-solid fa-dumbbell" size="sm" style={{color:"#ffffff"}}/></div>Entrenamientos</Link></li>
        <li><Link className="linkNav" to='/Gymnacios'><div className="iconLinkNav"><FontAwesomeIcon icon="fa-solid fa-heart" size="sm" style={{color:"#ffffff"}}/></div>Gymnacios</Link></li>
        <li><Link className="linkNav" to='/Nosotros'><div className="iconLinkNav"><FontAwesomeIcon icon="fa-solid fa-users" size="sm" style={{color:"#ffffff"}}/></div>Nosotros</Link></li>
        <li><Link className="linkNav" to='/Informacion'><div className="iconLinkNav"><FontAwesomeIcon icon="fa-solid fa-circle-info" size="sm" style={{color:"#ffffff"}}/></div>Informacion</Link></li>
        <li><Link className="linkNav" to='/Usuario'><div className="iconLinkNav"><FontAwesomeIcon icon="fa-solid fa-user" size="sm" style={{color:"#ffffff"}}/></div>Usuario</Link></li>
      </ul>

    </nav>    
  )
}

export default Nav