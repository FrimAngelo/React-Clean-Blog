import { Link } from 'react-router-dom';


export default function Header({ h1Text, backgroundImage, subheadingText }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="index.html">Start Bootstrap</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/post">Sample Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>{h1Text}</h1>
                <span className="subheading">{subheadingText}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
