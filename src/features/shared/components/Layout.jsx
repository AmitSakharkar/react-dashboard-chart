import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import { setIsMobileSidebarOpen } from '../../../store/layoutSlice';

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
  position: relative;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin-left: ${({ $isSidebarOpen }) => $isSidebarOpen ? '240px' : '0'};
  transition: margin-left 0.3s ease;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-left: 0;
    transform: ${({ $isMobileSidebarOpen }) => 
      $isMobileSidebarOpen ? 'translateX(240px)' : 'translateX(0)'};
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
    
    &:after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 5;
      opacity: ${({ $isMobileSidebarOpen }) => $isMobileSidebarOpen ? '1' : '0'};
      pointer-events: ${({ $isMobileSidebarOpen }) => $isMobileSidebarOpen ? 'auto' : 'none'};
      transition: opacity 0.3s ease;
    }
  }
`;

const Content = styled.main`
  padding: 2rem;
  flex: 1;
  max-width: 100%;
  overflow-x: hidden;
  
  @media (max-width: 1024px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { isSidebarOpen, isMobileSidebarOpen } = useSelector((state) => state.layout);

  const toggleMobileSidebar = () => {
    console.log('Toggling mobile sidebar', !isMobileSidebarOpen);
    dispatch(setIsMobileSidebarOpen(!isMobileSidebarOpen));
  };

  return (
    <LayoutWrapper>
      <Sidebar 
        isOpen={isSidebarOpen} 
        isMobileOpen={isMobileSidebarOpen}
        onClose={toggleMobileSidebar} 
      />
      <Main 
        $isSidebarOpen={isSidebarOpen}
        $isMobileSidebarOpen={isMobileSidebarOpen}
      >
        <Header onMenuClick={toggleMobileSidebar} />
        <Content>{children}</Content>
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;
