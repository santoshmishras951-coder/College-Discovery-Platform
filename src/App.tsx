/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Colleges } from './pages/Colleges';
import { CollegeDetails } from './pages/CollegeDetails';
import { Saved } from './pages/Saved';
import { Compare } from './pages/Compare';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="colleges" element={<Colleges />} />
          <Route path="college/:id" element={<CollegeDetails />} />
          <Route path="saved" element={<Saved />} />
          <Route path="compare" element={<Compare />} />
        </Route>
      </Routes>
    </Router>
  );
}
