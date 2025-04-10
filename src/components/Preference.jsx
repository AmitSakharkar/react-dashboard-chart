import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const ToggleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Toggle = styled.input.attrs({ type: 'checkbox' })`
  width: 40px;
  height: 20px;
  appearance: none;
  background: #ccc;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  outline: none;

  &:checked {
    background: #4f46e5;
  }

  &:checked::before {
    transform: translateX(20px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

const Preference = () => {
  const [preferences, setPreferences] = useState({
    darkMode: false,
    notifications: true,
    autoUpdates: false,
  });

  const toggle = key => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Wrapper>
      <ToggleGroup>
        <Label>Dark Mode</Label>
        <Toggle checked={preferences.darkMode} onChange={() => toggle('darkMode')} />
      </ToggleGroup>

      <ToggleGroup>
        <Label>Enable Notifications</Label>
        <Toggle checked={preferences.notifications} onChange={() => toggle('notifications')} />
      </ToggleGroup>

      <ToggleGroup>
        <Label>Auto Updates</Label>
        <Toggle checked={preferences.autoUpdates} onChange={() => toggle('autoUpdates')} />
      </ToggleGroup>
    </Wrapper>
  );
};

export default Preference;
