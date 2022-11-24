import logo from './images/airbnb-logo.png'
import './Nav.css'
function Nav () {
    return (
        <nav>

            <img src={logo} alt="airbnb-logo" className="nav-logo"/>
        </nav>
    )
}

export default Nav;