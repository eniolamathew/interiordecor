import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/DashBoard/Dashboard';
import Layout from './containers/Layout';
import SVGSprite from "./shared/SVGSprite";
import SVGBrand from './shared/SVGBrand';
import './scss/style.scss';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SVGBrand />
        <SVGSprite />
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/user-metrics" element={<UserMetrics />} />
            <Route path="/ai-performance" element={<AIPerformance />} />
            <Route path="/financial-metrics" element={<FinancialMetrics />} /> */}
          </Routes>
          </Layout>
        </div>
    </Router>
  );
}

export default App;