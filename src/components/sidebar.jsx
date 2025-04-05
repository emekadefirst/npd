import React, { useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiBell, HiUser, HiViewBoards } from "react-icons/hi";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const sidebarItems = [
    { name: 'Dashboard', icon: HiChartPie },
    { name: 'Reports', icon: HiViewBoards },
    { name: 'New report', icon: HiInbox },
    { name: 'Account', icon: HiUser },
    { name: 'Notification', icon: HiBell },


  ];

  return (
    <div className={`fixed top-0 left-0 h-screen ${collapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-green-800 to-green-900 text-white transition-all duration-300 shadow-xl`}>
      {/* Logo Section */}
      <div className="flex items-center justify-between p-4 border-b border-green-700">
        <div className="flex items-center space-x-3">
          <img 
            src="/images/npdlogo.jpg" 
            alt="NPD Logo" 
            className="h-10 w-10 rounded-full border-2 border-white shadow-lg" 
          />
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-lg">Nigeria Police</span>
              <span className="text-xs text-green-200">Report Dashboard</span>
            </div>
          )}
        </div>
        <button 
          onClick={toggleSidebar}
          className="text-green-200 hover:text-white focus:outline-none p-1 rounded"
        >
          {collapsed ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;
            
            return (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} p-2 rounded-lg transition-all duration-200 ${isActive ? 'bg-white text-green-900 font-medium shadow-md' : 'text-white hover:bg-green-700'}`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'text-green-600' : 'text-green-200'}`} />
                  {!collapsed && (
                    <span className={`ml-3 ${isActive ? '' : 'font-normal'}`}>{item.name}</span>
                  )}
                  {!collapsed && isActive && (
                    <span className="ml-auto bg-green-700 text-xs text-white px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Section */}
      <div className={`p-4 mt-auto ${collapsed ? 'text-center' : ''} border-t border-green-700`}>
        <div className="flex items-center justify-center bg-green-700 rounded-lg p-2 cursor-pointer hover:bg-green-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {!collapsed && <span className="ml-2">Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
