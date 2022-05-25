import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/Logo.png";
import { logoutAsync } from "../redux/actions/actionLogin";

const NavBars = () => {
  //-----------------logou-------------------------------//
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  return (
    <div className="container-Nav">
      <nav className="nav-item">
        <div className="container-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container-item_nav">
          <ul className="list-nav">
            <li className="item_nav">
              <Link to="/home">Home</Link>
            </li>
            <li className="item_nav">
              <Link to="/">About</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Property</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Ver</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Pages</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Blog</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Contac</Link>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653441060/Realmod/01_lgnh3a_cb7x6j.png" ></img>
            </li>

            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653441081/Realmod/02_oorvqi_ioa9dn.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653441099/Realmod/02_1_plbopd_ulxyuy.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653441120/Realmod/04_mjse2n_aojaje.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653441155/Realmod/Group_1_fey1yk_fko8qa.png" ></img>
            </li>

            <li className="item_nav" onClick={logout}>
              <a href="#">Cerrar</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBars;
