import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const Applayout = () => {
  return  (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
     
      <Header />


      <main>
     <Outlet />
      </main>
      </div>
    </div>

  );
};
export default Applayout;
