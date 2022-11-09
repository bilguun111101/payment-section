import React from 'react';
import Bag from './Payment/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesSection = () => {
  return (
    <Router>
        <Routes>
            <Route path='/payment' element={<Bag />} />
        </Routes>
    </Router>
  )
}

export default RoutesSection