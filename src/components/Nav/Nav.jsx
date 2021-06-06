import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Get Task';
  }

  return (
    <>
      <div className="nav-bar">
        <Link to="/home">
          <h2 className="nav-title">Do This</h2>
        </Link></div>
      <div className="nav">

        <div className="1">
          <Link className="navLink" to={loginLinkData.path}>
            {loginLinkData.text}
          </Link>
        </div>
        <div className="2">
          <Link className="navLink" to="/about">
            About
        </Link>
        </div>
        <div className="3">
          {user.id && (
            <>

              <div className="4">
                <Link className="navLink" to="/taskList">
                  Task List
            </Link>
              </div>
              <div className="5">
                <Link className="navLink" to="/info">
                  Info Page
            </Link>
              </div>

              <LogOutButton className="button" />
              {/* className="navLink" */}
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default Nav;
