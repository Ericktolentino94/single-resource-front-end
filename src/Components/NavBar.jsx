import {Link } from "react-router-dom"
import "../Components/NavBar.css"

export default function NavBar() {
    return (
        <div>
              <nav className="Nav">
        <h1>
          <Link to="/makeups">Makeup</Link>
        </h1>
        <button>
          <Link to="/makeups/new">New Makeup</Link>
        </button>
        <h1>
            <Link to="/">The Make Up Vault</Link>
        </h1>
      </nav>
    </div>
        
    )
}