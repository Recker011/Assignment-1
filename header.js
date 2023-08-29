import React from 'react';

function Header() {
    return (
        <header>
            <i className="fas fa-cloud logo-icon"></i>
            <h1>Decentralized Trading Platform</h1>
            <nav>
                <ul>
                    <li><a href="/home" title="Home"><i className="material-icons">home</i></a></li>
                    <li><a href="/assets" title="Assets"><i className="material-icons">widgets</i></a></li>
                    <li><a href="/trading" title="Trading"><i className="material-icons">swap_horiz</i></a></li>
                    <li><a href="/account" title="Account"><i className="material-icons">account_circle</i></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
