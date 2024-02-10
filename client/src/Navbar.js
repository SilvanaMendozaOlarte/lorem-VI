import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav class="navbar">
            <div class="container">
                <ul class="nav">
                    <li class="nav-item active">
                        <NavLink to="#">Exams </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;