import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function NavBar(props)  {
    return(
        
<nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">{props.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.terms}</a>
        </li>
        {/* <li className="nav-item dropdown" id="Dropped">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" >
            <li><a className="dropdown-item nav-link" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul> 
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about" >{props.policy}</Link>
        </li> */}
      </ul>
      {/* <button id="button">Login</button> */}
      
      <br></br>
      
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox"  onClick={props.DarkMode}role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
      </div>
    </div>
  </div>
</nav>
    )
  
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    terms: PropTypes.string.isRequired,
    policy: PropTypes.string.isRequired,

}
// NavBar.defaultProps = {
//     title: 'Title Anna',
//     terms: 'theTerms',
//     policy: 'Policy',

// };