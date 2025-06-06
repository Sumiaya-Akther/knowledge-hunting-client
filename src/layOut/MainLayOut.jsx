import React from 'react';
import NavBar from '../shared/header/NavBar';
import Footer from '../shared/footer/Footer';
import { Outlet } from 'react-router';


const MainLayOut = () => {
    return (
        <div className=''>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='w-11/12 mx-auto my-10  min-h-[calc(100vh-315px)] '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayOut;