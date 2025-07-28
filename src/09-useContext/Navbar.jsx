import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        {/* <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/login" >Login</Link> */}
    <nav className="navbar bg-dark navbar-expand-lg rounded-3" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">UseContext </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                    <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}` }
                    to="/" >
                        Home
                    </NavLink>

                    <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}` }
                    to="/about" >
                        About
                    </NavLink>

                    <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}` }
                    to="/login" >
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>

    </>
  )
}
