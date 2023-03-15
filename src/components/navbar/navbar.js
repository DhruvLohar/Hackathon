import React from 'react';
import './navbar.css';
import styles from '../styles';
import Button from '../Button';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className={`container ${styles.flexBetween}`}>
                <a href="#" className='navbar-head'>Auto</a>
                <div className={`${styles.flexCenter}`}>
                    <a href="#" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>About</a>
                    <a href="#" className='nav-link'>Contact</a>
                </div>
                <Button text="Connect to MetaMask" icon="true" />
            </div>
        </nav>
    )
}
