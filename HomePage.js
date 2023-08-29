import React from 'react';
import Header from './header';
import HeroSection from './HeroSection';
import AssetShowcase from './AssetShowcase';
import HowItWorks from './HowItWorks';
import SearchFilterSection from './SearchFilterSection';
import Testimonials from './Testimonials';
import Footer from './Footer';

function HomePage() {
    return (
        <div className="container">
            <Header />
            <HeroSection />
            <AssetShowcase />
            <HowItWorks />
            <SearchFilterSection />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default HomePage;
