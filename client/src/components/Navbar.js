import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="container">
                <ul className="nav">
                    <li className="nav-item active">
                        <Link to="/exams">Exams </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;