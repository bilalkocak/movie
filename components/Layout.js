import React from 'react';
import NavBar from "./Navbar/Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};

export default Layout;
