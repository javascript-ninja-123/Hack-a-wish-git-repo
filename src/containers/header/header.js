import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/header.less'
import logo from '../header/make-a-wish-logo.svg'
import styled from 'styled-components';

const DonateConatiner = styled.div`
    text-align:center;
    a{
        padding:0;
        margin:0;
    }
`

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <Link to='/'><img src={logo} alt="make-a-wish" className="logo" /></Link>
                <div className="row">
                    <ul>
                        <a href="#" className="adopt">Match-A-Wish</a>
                        <a href="#">Impact Of A Wish</a>
                        <a href="#">Get Involved</a>
                        <a href="#">Refer A Child</a>
                        <Link to='/signup'>Sign Up</Link>
                    </ul>
                    <DonateConatiner className="donate"><Link to="/donate">Donate</Link></DonateConatiner>
                </div>
            </div>
        </div>
    )
}

export default Header;