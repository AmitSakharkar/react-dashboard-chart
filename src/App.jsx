import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AllCardsPage from './pages/AllCardsPage';
import SettingsPage from './pages/SettingsPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 1rem;
  margin-left: 240px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

function App() {
  return (
    <Layout>
      <Sidebar />
      <Content>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/cards" element={<AllCardsPage />} />
          <Route path="/" element={<DashboardPage />} /> {/* Keep root as fallback */}
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
