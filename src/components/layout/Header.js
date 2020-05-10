import React from 'react';
import { Link } from 'react-router-dom';
const Header = props => {
  const { name } = props;
  return (
    <header className='bg-danger '>
      <div className='container'>
        <nav className='navbar  navbar-dark mb-3 py-0'>
          <a href='/'>
            <div className='navbar-brand'>{name}</div>
          </a>
          <div>
            <ul className='navbar-nav mr-auto flex-row'>
              <li className='nav-item mr-2'>
                <Link to='/' className='nav-link'>
                  Home <i className='fas fa-home'></i>
                </Link>
              </li>
              <li className='nav-item mr-2'>
                <Link to='/contact/AddContact' className='nav-link'>
                  Add <i className='fas fa-plus'></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about/About' className='nav-link'>
                  About <i className='fas fa-question'></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
