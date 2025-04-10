import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSelectedTab } from '../store/layoutSlice';

const Sidebar = styled.div`
  width: 240px;
  height: 100vh;
  position: fixed;
  left: ${props => props.$isMobile ? (props.$isOpen ? '0' : '-240px') : '0'};
  top: 0;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  z-index: 100;
  transition: left 0.3s ease;

  @media (max-width: 768px) {
    box-shadow: ${props => props.$isOpen ? '2px 0 10px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

const MenuItem = styled.div`
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => (props.$active ? '#1a1a1a' : '#666')};
  background: ${(props) => (props.$active ? '#f5f5f5' : 'transparent')};
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const menuOptions = [
  'Dashboard',
  'Transactions',
  'Analytics',
  'Settings',
  'Support'
];

const routeMap = {
  'Dashboard': '/dashboard',
  'Transactions': '/cards',  // Changed to match existing route
  'Analytics': '/dashboard',  // Temporarily pointing to dashboard
  'Settings': '/settings',
  'Support': '/settings'  // Temporarily pointing to settings
};

const Drawer = ({ isOpen, isMobileOpen, onClose }) => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.layout.selectedTab);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  // Sync selected tab with current route
  React.useEffect(() => {
    const currentTab = Object.keys(routeMap).find(
      key => routeMap[key] === location.pathname
    );
    if (currentTab) {
      dispatch(setSelectedTab(currentTab));
    }
  }, [location.pathname, dispatch]);

  return (
    <Sidebar 
      $isMobile={isMobile}
      $isOpen={isMobile ? isMobileOpen : isOpen}
      onClick={isMobile ? onClose : undefined}
    >
      {menuOptions.map((item) => (
        <MenuItem
          key={item}
          $active={selectedTab === item ? "true" : undefined}
          onClick={() => {
            dispatch(setSelectedTab(item));
            navigate(routeMap[item]);
          }}
        >
          {item}
        </MenuItem>
      ))}
    </Sidebar>
  );
};

export default Drawer;
