import React from 'react';
import './App.css';
import CountrySelection from './Components/CountryTimezone';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">World Clock</h1>
      <CountrySelection />
    </div>
  );
}


export default App;
