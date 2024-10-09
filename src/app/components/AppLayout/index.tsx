import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
interface AppLayoutProps {
    component: React.ReactNode;
}
function AppLayout({ component }: AppLayoutProps) {
    return (
        <>  <Navbar />
            {component}
            <Footer />
        </>
    )
}

export default AppLayout