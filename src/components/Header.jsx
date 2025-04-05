import { NavLink } from "react-router-dom"

export const Header = () => {
  return <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">  
    <div className="container-fluid">
      <NavLink to="#" className="navbar-brand">
      <i className="bi bi-camera-reels-fill"></i> MovieSeek
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">  {/*button targetted to the div below using id, if small window button appear, that particular div shows when clicked */}
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">    {/*narbar collapse ,makes this div to the left end */}
        <ul className="navbar-nav me-auto mb-2 mb" >                   {/* remove margin end auto if ndont need search bar at the end, and margin bottom of header adjustment*/ }
          <li className="nav-item">           
            <NavLink to ="/"className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movies/LoginPage" className="nav-link">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movies/SignUpPage" className="nav-link">Sign Up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movies/AddMovies" className="nav-link">Add Movies</NavLink>
          </li>
        </ul>
        <form action="#">
          <input type="search" className="form-control" placeholder="search" />
        </form>
      </div>
    </div>
  </nav>
}

