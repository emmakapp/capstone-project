import logo from './Assets/logo.png';

function  Nav() {
    return  (
        <nav className="main-nav">
            <ul>
                <li><img src="/Assets/logo.png" /></li>
                <li><a href='#' className='nav-item'>Home</a></li>
                <li><a href='#' className='nav-item'>About</a></li>
                <li><a href='#' className='nav-item'>Menu</a></li>
                <li><a href='#' className='nav-item'>Reservations</a></li>
                <li><a href='#' className='nav-item'>Order Online</a></li>
                <li><a href='#' className='nav-item'>Login</a></li>
             
            </ul>
        </nav>
    )
    }
export default Nav;