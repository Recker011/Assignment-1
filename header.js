import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo">YourLogo</div>
            <nav>
                <a href="/browse-assets" title="Browse Assets"><i className="material-icons">view_list</i></a>
                <a href="/trading-platform" title="Trading Platform"><i className="material-icons">swap_horiz</i></a>
                <a href="/transaction-history" title="Transaction History"><i className="material-icons">history</i></a>
                <a href="/smart-contracts" title="Smart Contracts"><i className="material-icons">smart_toy</i></a>
                <a href="/profile" title="Profile"><i className="material-icons">account_circle</i></a>
            </nav>
            <button className="sign-in-btn">Sign In</button>
            <button className="sign-up-btn">Sign Up</button>
        </header>
    );
}



export default Header;
