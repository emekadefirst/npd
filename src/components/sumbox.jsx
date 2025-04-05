import React, { useState } from "react";
import { HiSearch, HiFilter, HiDotsVertical, HiDownload, HiLocationMarker, HiExclamation, HiCheckCircle, HiClock } from "react-icons/hi";

const DashboardContent = () => {
  // Sample data for demonstration
  const dashboardStats = {
    totalReports: 3472,
    todayReports: 27,
    stateData: [
      { state: "Lagos", count: 412 },
      { state: "Abuja", count: 321 },
      { state: "Rivers", count: 287 },
      { state: "Kano", count: 243 },
      { state: "Anambra", count: 218 }
    ],
    recentReports: [
      { id: "RPT-23941", type: "Theft", location: "Lagos", status: "Pending", date: "Today, 10:23 AM" },
      { id: "RPT-23940", type: "Assault", location: "Abuja", status: "Investigating", date: "Today, 09:45 AM" },
      { id: "RPT-23939", type: "Fraud", location: "Rivers", status: "Resolved", date: "Today, 08:12 AM" },
      { id: "RPT-23938", type: "Missing Person", location: "Kano", status: "Pending", date: "Yesterday, 18:55 PM" },
      { id: "RPT-23937", type: "Robbery", location: "Enugu", status: "Resolved", date: "Yesterday, 14:30 PM" },
      { id: "RPT-23936", type: "Vandalism", location: "Kaduna", status: "Investigating", date: "Yesterday, 11:20 AM" }
    ]
  };

  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
      {/* Header with search bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-800">Reports Dashboard</h1>
          <p className="text-gray-500">Monitor and analyze citizen reports across Nigeria</p>
        </div>
        
        <div className="flex items-center relative">
          <div className="relative flex-1 min-w-[300px]">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search reports..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="ml-2 p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <HiFilter className="text-gray-600 w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Reports */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Reports</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{dashboardStats.totalReports.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-600 text-sm font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              7.2% increase
            </span>
            <span className="text-gray-500 text-sm ml-2">from last month</span>
          </div>
        </div>
        
        {/* Today's Reports */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Today's Reports</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{dashboardStats.todayReports}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-blue-600 text-sm font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              3 more
            </span>
            <span className="text-gray-500 text-sm ml-2">than yesterday</span>
          </div>
        </div>
        
        {/* Highest Reporting State */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Highest Reporting State</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{dashboardStats.stateData[0].state}</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <HiLocationMarker className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-yellow-600 text-sm font-medium flex items-center">
              {dashboardStats.stateData[0].count} reports
            </span>
            <span className="text-gray-500 text-sm ml-2">in the last 30 days</span>
          </div>
        </div>
      </div>
      
      {/* States with highest reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* State Rankings */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">States with Highest Reports</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <HiDotsVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            {dashboardStats.stateData.map((state, index) => (
              <div key={state.state} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 text-xs font-medium text-white ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-yellow-700' : 'bg-gray-300'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="font-medium text-gray-700">{state.state}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{state.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-yellow-700' : 'bg-gray-300'
                    }`} 
                    style={{ width: `${(state.count / dashboardStats.stateData[0].count) * 100}%` }}>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <a href="#" className="text-sm font-medium text-green-600 hover:text-green-800 flex items-center">
                View all states
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Distribution by Report Type */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Report Type Distribution</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <HiDownload className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6 flex flex-col items-center justify-center h-[calc(100%-74px)]">
            {/* Placeholder for chart - in real app, you'd use a library like Chart.js or Recharts */}
            <div className="w-48 h-48 rounded-full border-8 border-gray-200 relative">
              <div className="absolute inset-0 rounded-full border-8 border-green-500 border-r-transparent border-b-transparent" 
                   style={{ transform: 'rotate(45deg)' }}></div>
              <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-l-transparent border-b-transparent" 
                   style={{ transform: 'rotate(165deg)' }}></div>
              <div className="absolute inset-0 rounded-full border-8 border-yellow-500 border-t-transparent border-r-transparent" 
                   style={{ transform: 'rotate(260deg)' }}></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 w-full">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Theft (42%)</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Assault (31%)</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Others (27%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Audit Tray / Recent Reports */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Audit Tray</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Filter</button>
              <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">Export</button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report ID</th>
                <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {dashboardStats.recentReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{report.id}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{report.type}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{report.location}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      report.status === 'Investigating' ? 'bg-blue-100 text-blue-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {report.status === 'Pending' && <HiExclamation className="w-3 h-3 mr-1" />}
                      {report.status === 'Investigating' && <HiClock className="w-3 h-3 mr-1" />}
                      {report.status === 'Resolved' && <HiCheckCircle className="w-3 h-3 mr-1" />}
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{report.date}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <a href="#" className="text-green-600 hover:text-green-900">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">6</span> of <span className="font-medium">120</span> reports
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 border border-gray-300 bg-green-50 text-green-600 font-medium rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;