import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/" className="home" >Home</Link>
                <Link to="/" className="services" >Services</Link>
                <Link to="/" className="products" >Products</Link>
            </nav>
        )
    }
}
