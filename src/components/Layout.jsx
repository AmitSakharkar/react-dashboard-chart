import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';
import { setIsMobileSidebarOpen } from '../store/layoutSlice';

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
  overflow-x: hidden;
  position: relative;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin-left: 240px;
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const Content = styled.main`
  padding: 2rem;
  flex: 1;
  max-width: 100%;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { isSidebarOpen, isMobileSidebarOpen } = useSelector((state) => state.layout);

  const toggleMobileSidebar = () => {
    dispatch(setIsMobileSidebarOpen(!isMobileSidebarOpen));
  };

  return (
    <LayoutWrapper>
      <Sidebar 
        isOpen={isSidebarOpen} 
        isMobileOpen={isMobileSidebarOpen}
        onClose={toggleMobileSidebar} 
      />
      <Main style={{ 
        marginLeft: window.innerWidth > 768 ? '240px' : isMobileSidebarOpen ? '240px' : '0' 
      }}>
        <Header onMenuClick={toggleMobileSidebar} />
        <Content>{children}</Content>
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;
