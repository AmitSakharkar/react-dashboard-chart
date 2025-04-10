import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AllCardsPage from './pages/AllCardsPage';
import SettingsPage from './pages/SettingsPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 240px;
  z-index: 10;
  background: white;
  @media (max-width: 768px) {
    left: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 1rem;
  margin-left: 240px;
  margin-top: 80px;
  width: calc(100% - 240px);
  overflow-y: auto;
  height: calc(100vh - 80px);
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Sidebar />
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Content>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/cards" element={<AllCardsPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </Content>
      </Layout>
    </>
  );
}

export default App;
