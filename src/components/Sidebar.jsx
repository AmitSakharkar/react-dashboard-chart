import React from 'react';
import styled from 'styled-components';
import {
  FiHome,
  FiCreditCard,
  FiRepeat,
  FiBarChart2,
  FiSettings,
  FiSend
} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const SidebarWrapper = styled.aside`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 28px 20px;
  width: 252px;
  align-self: flex-start;
  display: none;
  flex-direction: column;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.04);
  margin: 32px 0;
  font-family: 'Inter', sans-serif;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const NavGroup = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 16px;
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease;

  &.active {
    background-color: #e0e7ff;
    color: #3b82f6;
  }

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  svg {
    font-size: 20px;
  }
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Logo>
        <FiSend />
        Soar Task
      </Logo>

      <NavGroup>
        <NavItem to="/dashboard">
          <FiHome />
          Dashboard
        </NavItem>
        <NavItem to="/cards">
          <FiCreditCard />
          Cards
        </NavItem>
        <NavItem to="/transactions">
          <FiRepeat />
          Transactions
        </NavItem>
        <NavItem to="/analytics">
          <FiBarChart2 />
          Analytics
        </NavItem>
        <NavItem to="/settings">
          <FiSettings />
          Settings
        </NavItem>
      </NavGroup>
    </SidebarWrapper>
  );
}
