import React, { Component } from 'react';
import Header from './header.js';
import {Link} from "react-router-dom";
import './game.css';


class Confirm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='component-container' >
            <Header />
            <div className="center">
            <h1>Thank you for your participation</h1>
            <Link to='/gamelist'>
                <button className='button'>
                  Back to Game List
                </button>
            </Link>
            </div>
            </div>
        )
    }
}

export default Confirm;
