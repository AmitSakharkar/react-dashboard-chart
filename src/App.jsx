import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AllCardsPage from './pages/AllCardsPage';
import SettingsPage from './pages/SettingsPage';
import Layout from './features/shared/components/Layout';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/cards" element={<AllCardsPage />} />
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
