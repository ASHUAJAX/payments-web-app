'use client'
import React, { useEffect } from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
interface AppLayoutProps {
    component: React.ReactNode;
}
function AppLayout({ component }: AppLayoutProps) {
    
    

    // Initialize AOS
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
          once: false, // Whether animation should happen only once
        });
      }, []); // Empty dependency array to run only once on mount
    return (
        <>  <Navbar />
            {component}
            <Footer />
        </>
    )
}

export default AppLayout