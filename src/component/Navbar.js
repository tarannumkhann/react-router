import React, { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="tanu">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">ContactUs</Link>
        </li>
        <li>
          <Link to="/filter">Filter</Link>
        </li>

        <li>
          <Link to="/">
            <button className="btn">Login</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
