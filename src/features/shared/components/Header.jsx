import React, { useState } from 'react'
import styled from 'styled-components'
import { FiMenu, FiBell, FiSearch } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #ffffff;
  border-radius: 1.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 1rem;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
    margin-bottom: 1.5rem;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  display: block;
  transition: transform 0.2s ease;
  pointer-events: auto;

  &:active {
    transform: scale(0.95);
  }
`

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  color: #222;
  transition: font-size 0.2s ease;

  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
`

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 25rem;
  margin: 0 2rem;
  display: ${({ $isMobile }) => $isMobile ? 'none' : 'block'};

  @media (min-width: 768px) {
    display: block;
  }
`

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  color: #999;
  font-size: 1rem;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  background-color: #f9f9f9;
  transition: all 0.2s ease;

  &:focus {
    border-color: #666;
    background-color: #fff;
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: #555;
  transition: all 0.2s ease;
  font-size: 1.25rem;
  display: ${({ $hideOnDesktop }) => $hideOnDesktop ? 'block' : 'none'};

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    display: ${({ $hideOnDesktop }) => $hideOnDesktop ? 'none' : 'block'};
    font-size: 1.125rem;
  }
`

const Avatar = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: #eee;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
`

export default function Header({ onMenuClick, isOpen = false, isMobile = false }) {
  const user = useSelector((state) => state.user)
  const selectedTab = useSelector((state) => state.layout.selectedTab);
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  const menuButtonRef = React.useRef(null);

  React.useEffect(() => {
    const button = menuButtonRef.current;
    if (!button) return;

    const handleClick = () => {
      onMenuClick();
    };

    button.addEventListener('click', handleClick);
    return () => button.removeEventListener('click', handleClick);
  }, [onMenuClick]);

  return (
    <HeaderContainer>
      <LeftSection>
        {(!isOpen || isMobile) && (
          <MenuButton 
            onClick={(e) => {
              onMenuClick();
              e.stopPropagation();
            }}
          >
            <FiMenu />
          </MenuButton>
        )}
        <Title>{selectedTab}</Title>
      </LeftSection>

      <SearchContainer $isMobile={showMobileSearch}>
        <SearchIcon />
        <SearchInput placeholder="Search..." />
      </SearchContainer>

      <RightSection>
        <IconButton 
          $hideOnDesktop
          onClick={() => setShowMobileSearch(prev => !prev)}
        >
          <FiSearch />
        </IconButton>
        <IconButton>
          <FiBell />
        </IconButton>
        <Avatar src={user?.avatar || 'https://i.pravatar.cc/300'} />
      </RightSection>
    </HeaderContainer>
  )
}
