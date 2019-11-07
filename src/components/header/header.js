import React from 'react';
import './header.scss'
import Logo from './../../assets/graphics/logo.png'

const Header = (props) => {
    return (
        <header data-test='headerComponent'>
            <div className='wrap'>
                <div className='logo'>
                    <img className='logoImg' data-test='logoImg' src={Logo} alt='logo' title='logo' />
                </div>
            </div>
        </header>
    )
};

export default Header;