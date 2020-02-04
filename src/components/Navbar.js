import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                    <Link to="/">
                        {/* Icons made by Kiranshastry from www.flaticon.com */}
                        <img src={logo} alt="store"  />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-3">
                                <i className="fas fa-cart-plus"/>
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </nav>
            </div>
        )
    }
}