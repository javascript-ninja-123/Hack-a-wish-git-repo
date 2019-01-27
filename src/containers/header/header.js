import React from 'react'
import '../../style/header.less'
import logo from '../header/make-a-wish-logo.svg'
const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <img src={logo} alt="make-a-wish" className="logo" />
                <ul>
                    <a href="#" className="adopt">Adopt-A-Wish</a>
                    <a href="#">Impact Of A Wish</a>
                    <a href="#">Get Involved</a>
                    <a href="#">Refer A Child</a>
                </ul>
                <div className="donate">Donate</div>
            </div>
        </div>
    )
}

export default Header