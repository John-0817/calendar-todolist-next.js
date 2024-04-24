import React from 'react';
import SideMenu from '../ui/todo/sidemenu';

export default function Layout({ children } : {children : React.ReactNode}) {
  return(
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none px-3 py-5 md:w-64">
        <SideMenu />
      </div>
      <div className="flex w-full pl-3 pr-6 py-5">{children}</div>
    </div>
  )
}