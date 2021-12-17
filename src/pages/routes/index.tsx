import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Repository from '../Repository';


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/repository" element={<Repository/>}/>
      </Routes>
    </BrowserRouter>
      
  )
}

export default AppRoutes;