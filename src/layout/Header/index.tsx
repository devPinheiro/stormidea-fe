// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// components
import Hamburger from '../../components/SVGComponents/hamburger';
import Search from '../../components/SVGComponents/search';

// styles
import './header.scss'
import Logo from '../../components/SVGComponents/logo';
import Button from '../../components/Button';
import CategoryList from '../../components/CategoryList';

interface HeaderProps { 
    location: any
}

const Header = (props: HeaderProps) => {
    const {location} = props;
    
    return (
     
        <header>
          <nav className='nav'>
            <div className='leftNav'>
              <Link to='/' className='leftNav-menu'>
                <Hamburger />
              </Link>
            </div>

            <div className='icon'>
              <Logo />
            </div>
            <div className='rightNav'>
              <menu className='nav-items'>
                <Link className='navlink' to='/'>
                  Newsletter
                </Link>
                <Link className='navlink' to='/'>
                  SignIn
                </Link>
                <Button name='subscribe' type='regular' />
              </menu>

              <Link to='/'>
                <Search />
              </Link>
            </div>
          </nav>
          
        </header>
   
    );
}

export default Header;
