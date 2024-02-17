import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="container">
                <ul className="nav">
                    <li className="nav-item active">
                        <NavLink to="#">Exams </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;