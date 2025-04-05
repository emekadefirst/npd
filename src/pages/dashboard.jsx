
import React, { useState } from 'react';  
import SideSidebarComponentbar from "../components/sidebar";
import DashboardContent from "../components/sumbox";


const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideSidebarComponentbar collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* Content Area */}
            <div className={`flex-1 overflow-y-auto ${collapsed ? 'ml-20' : 'ml-64'}`}> 
                <DashboardContent />
            </div>
        </div>
    );
};



export default Dashboard;
