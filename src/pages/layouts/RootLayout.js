import React from 'react';
import { UserAuth } from '../../contexts/AuthContextFirebase';
import MyAppBar from './AppBar';

// Layout Component
// Parent Conponent
// Pass the child props
export default function RootLayout({ children }) {
  return (
    <>
      <div className="main-wrapper flex flex-col h-screen bg-gray-100">
        <MyAppBar />
        <div className='mainboard'>
          {children}
        </div>
      </div>
    </>
  );
}