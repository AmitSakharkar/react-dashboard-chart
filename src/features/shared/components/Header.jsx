import React, { useState } from 'react'
import styled from 'styled-components'
import { FiMenu, FiBell, FiSearch } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding: 16px 24px;
    margin-bottom: 24px;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: #333;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #222;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`

const DesktopSearch = styled.div`
  display: none;
  position: relative;

  @media (min-width: 768px) {
    display: block;
    flex: 1;
    max-width: 400px;
    margin: 0 32px;
  }
`

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #999;
  font-size: 16px;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 16px 8px 40px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 14px;
  background-color: #f9f9f9;
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const NotificationIcon = styled(FiBell)`
  font-size: 20px;
  color: #555;
  cursor: pointer;
`

const MobileSearchIcon = styled(FiSearch)`
  font-size: 20px;
  color: #555;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ccc;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`

export default function Header({ title = "Dashboard", onMenuClick }) {
  const user = useSelector((state) => state.user)
  const selectedTab = useSelector((state) => state.layout.selectedTab);
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const isMobile = window.innerWidth <= 768;

  return (
    <HeaderContainer>
      <LeftSection>
        {isMobile && (
          <MenuIcon onClick={onMenuClick}>
            <FiMenu />
          </MenuIcon>
        )}
        <Title>{selectedTab}</Title>
      </LeftSection>

      <DesktopSearch>
        <SearchIcon />
        <SearchInput placeholder="Search..." />
      </DesktopSearch>

      <RightSection>
        <MobileSearchIcon onClick={() => setShowMobileSearch(prev => !prev)} />
        <NotificationIcon />
        <Avatar src={user?.avatar || 'https://i.pravatar.cc/300'} />
      </RightSection>
    </HeaderContainer>
  )
}
