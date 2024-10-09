import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
interface AppLayout {
    component: React.ReactNode;
}
function AppLayout({ component }: AppLayout) {
    return (
        <>  <Navbar />
            {component}
            <Footer />
        </>
    )
}

export default AppLayout