import React from 'react';
import Logo from './logo';
import SidebarRoutes from './sidebar-routes';

const Sidebar = () => {
  return (
    <div className="h-full  border-r flex flex-col overflow-y-auto bg-white shadow-sm  justify-between ">
      <div>
        <div className="p-6">
          <Logo />
        </div>
        <div className="flex flex-col w-full">
          <SidebarRoutes />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
