import React from 'react';
import './navbar.css';
import styles from '../styles';
import Button from '../Button';

export default function Navbar() {
    return (
        <nav className='navbar mt-6'>
            <div className={`container ${styles.flexBetween}`}>
                <a href="#" className='font-title navbar-head'>PASSIMOJI</a>
                <div className={`${styles.flexCenter}`}>
                    <a href="#" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>About</a>
                    <a href="#" className='nav-link'>Contact</a>
                </div>
                <Button text="Get Started" />
            </div>
        </nav>
    )
}
