import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
  background: #f9fafb;
`

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 240px;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Content = styled.main`
  padding: 1rem;
  overflow-y: auto;
  flex: 1;
`;

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <LayoutWrapper>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Main>
        <Header onMenuClick={toggleSidebar} />
        <Content>{children}</Content>
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;