import React from 'react';
import Header from './header';
import Footer from './Footer';

function HomePage() {
    return (
        <div>
            <Header />
            <main>
                <div className="breadcrumb">
                    <span>Home</span>
                    <span>/</span>
                    <span>Dashboard</span>
                </div>
                <h2>Welcome to the Decentralized Trading Platform</h2>
                <p>Explore the vast world of decentralized trading...</p>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
