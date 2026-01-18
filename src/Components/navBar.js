import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <Link className="link" to={'/systems'}>Список систем корабля</Link>
        </nav>
    )
}

export default NavBar;