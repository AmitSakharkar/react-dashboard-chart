import React, { useState } from 'react';
import styled from 'styled-components';

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
        {tab === 'profile' && (
          <form>
            <label>Name</label><br />
            <input type="text" placeholder="John Doe" /><br /><br />
            <label>Email</label><br />
            <input type="email" placeholder="john@example.com" /><br /><br />
            <button type="submit">Save</button>
          </form>
        )}

        {tab === 'preference' && (
          <form>
            <label>Theme</label><br />
            <select>
              <option>Light</option>
              <option>Dark</option>
            </select><br /><br />
            <label>Language</label><br />
            <select>
              <option>English</option>
              <option>Spanish</option>
            </select><br /><br />
            <button type="submit">Save Preferences</button>
          </form>
        )}

        {tab === 'security' && (
          <form>
            <label>Old Password</label><br />
            <input type="password" /><br /><br />
            <label>New Password</label><br />
            <input type="password" /><br /><br />
            <button type="submit">Update Password</button>
          </form>
        )}
      </Panel>
    </>
  );
};

export default SettingsPage;
