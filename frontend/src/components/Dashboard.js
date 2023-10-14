import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        
        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add your analytics widgets here */}
          <div className="bg-blue-200 rounded p-4">Analytics Widget 1</div>
          <div className="bg-blue-200 rounded p-4">Analytics Widget 2</div>
          <div className="bg-blue-200 rounded p-4">Analytics Widget 3</div>
        </div>

        {/* Chatbot Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Chatbot</h3>
          {/* Add your chatbot component here */}
          <div className="bg-white rounded p-4 shadow-md">
            {/* Chatbot component */}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add your feature sections here */}
            <div className="bg-green-200 rounded p-4">Feature 1</div>
            <div className="bg-green-200 rounded p-4">Feature 2</div>
            <div className="bg-green-200 rounded p-4">Feature 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
