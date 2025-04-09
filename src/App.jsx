import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
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
          <Route path="/" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
