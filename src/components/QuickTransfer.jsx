import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const ContactList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Contact = styled.div`
  text-align: center;
`;

const QuickTransfer = ({ contacts }) => (
  <Wrapper>
    <h3>Quick Transfer</h3>
    <ContactList>
      {contacts?.map((contact, index) => (
        <Contact key={index}>
          <img src={contact?.avatar} alt="avatar" width="50" height="50" style={{ borderRadius: '50%' }} />
          <p>{contact?.name}</p>
        </Contact>
      ))}
    </ContactList>
    <input type="number" placeholder="Enter Amount" style={{ padding: '0.5rem', width: '100%' }} />
    <button style={{ marginTop: '1rem', padding: '0.75rem', width: '100%', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '8px' }}>
      Send
    </button>
  </Wrapper>
);

export default QuickTransfer;