
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-paper transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16 md:pt-20 font-reading">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
