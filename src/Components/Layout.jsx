import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ cart }) => {
  return (
    <div>
      <Sidebar size={cart.length}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
