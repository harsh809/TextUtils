import React from "react";


function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-dark navbar-expand-lg bg-dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TextUtils
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
            </ul>
            {/* <div className={`form-check form-switch mx-5 text-${(props.mode==="light"?"dark":"light")}`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
            </div> */}
            <div className="form-check form-switch mx-5 text-light">
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// Navbar.propTypes = {
//     Title:propTypes.string.isRequired,
//     About:propTypes.string.isRequired
// }
// Navbar.defaultProps = {
//   title:"TextUtils2",
//   about:"About Us"
// }