
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Propriedades">Propriedades</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar