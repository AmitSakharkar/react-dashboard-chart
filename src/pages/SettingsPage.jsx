import React, { useState } from 'react';
import styled from 'styled-components';
import EditProfile from '../features/settings/components/EditProfile';
import Preference from '../features/settings/components/Preference';
import Security from '../features/settings/components/Security';

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: ${props => (props.active ? '#4caf50' : '#ccc')};
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

const Panel = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const SettingsPage = () => {
  const [tab, setTab] = useState('profile');

  return (
    <>
      <Tabs>
        <TabButton active={tab === 'profile'} onClick={() => setTab('profile')}>Edit Profile</TabButton>
        <TabButton active={tab === 'preference'} onClick={() => setTab('preference')}>Preference</TabButton>
        <TabButton active={tab === 'security'} onClick={() => setTab('security')}>Security</TabButton>
      </Tabs>

      <Panel>
        {tab === 'profile' && <EditProfile />}
        {tab === 'preference' && <Preference />}
        {tab === 'security' && <Security />}
      </Panel>
    </>
  );
};

export default SettingsPage;
