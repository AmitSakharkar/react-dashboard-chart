import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSelectedTab } from '../../../store/layoutSlice';

const SidebarTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-left: 0.5rem;
  color: #1a1a1a;
`;

const SidebarContainer = styled.div`
  width: 15rem;
  height: 100vh;
  position: fixed;
  left: ${props => props.$isMobileOpen ? '0' : '-15rem'};
  top: 0;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  z-index: 100;
  transition: left 0.3s ease, box-shadow 0.3s ease;
  overflow-y: auto;

  @media (min-width: 768px) {
    left: ${props => props.$isOpen ? '0' : '-15rem'};
    box-shadow: ${props => props.$isOpen ? '2px 0 10px rgba(0, 0, 0, 0.05)' : 'none'};
  }
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background: ${(props) => (props.$active ? '#f5f5f5' : 'transparent')};
  color: ${(props) => (props.$active ? '#1a1a1a' : '#666')};
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: #f5f5f5;
  }

  &:focus-visible {
    outline: 2px solid #666;
    outline-offset: 2px;
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
  'Transactions': '/cards',
  'Analytics': '/dashboard',
  'Settings': '/settings',
  'Support': '/settings'
};

const Sidebar = ({ isOpen, isMobileOpen, onClose }) => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.layout.selectedTab);
  const location = useLocation();
  const navigate = useNavigate();

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
    <SidebarContainer 
      $isOpen={isOpen}
      $isMobileOpen={isMobileOpen}
      onClick={(e) => {
        // Only close if clicking on backdrop (not menu items)
        if (isMobileOpen && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {menuOptions.map((item) => (
        <MenuItem
          key={item}
          $active={selectedTab === item}
          onClick={() => {
            dispatch(setSelectedTab(item));
            navigate(routeMap[item]);
            if (isMobileOpen) onClose();
          }}
          aria-current={selectedTab === item ? 'page' : undefined}
        >
          {item}
        </MenuItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
