import React from 'react';
import {Link} from 'react-router-dom';

function NavBar () {
    return (
        <ul>
            <li><Link path="/">Home</Link></li>
            <li><Link path="/about">About</Link></li>
            <li><Link path="/contact">Contact</Link></li>
            <li><Link path="/example">Example</Link></li>
            <li><Link path="/projects">Projects</Link></li>
        </ul>
    )
}

export default NavBar;