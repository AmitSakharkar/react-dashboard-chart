import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const ContactList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 2px;
  }
`;

const Contact = styled.div`
  text-align: center;
  min-width: 70px;
`;

const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3e8e41;
  }

  &:disabled {
    background-color: #a5d6a7;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: #f44336;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const QuickTransfer = ({ contacts = [] }) => {
  const [amount, setAmount] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setSelectedContact(null);
    setAmount('');
    setError('');
    setSuccess(false);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedContact) {
      setError('Please select a recipient');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }
    if (Number(amount) > 10000) {
      setError('Maximum transfer amount is $10,000');
      return;
    }
    setError('');
    setIsLoading(true);
    // TODO: Implement actual transfer logic
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setAmount('');
    }, 2000);
  };

  return (
    <Wrapper>
      <h3>Quick Transfer</h3>
      <ContactList>
        {contacts.map((contact) => (
        <Contact 
          key={contact.id}
          onClick={() => handleContactSelect(contact)}
          style={{
            cursor: 'pointer',
            opacity: selectedContact?.id === contact.id ? 1 : 0.6,
            transform: selectedContact?.id === contact.id ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 0.2s ease'
          }}
        >
          <img 
            src={contact.avatar} 
            alt={`${contact.name}'s avatar`} 
            width="50" 
            height="50" 
            style={{ 
              borderRadius: '50%',
              border: selectedContact?.id === contact.id ? '2px solid #4caf50' : 'none'
            }} 
          />
          <p>{contact.name}</p>
        </Contact>
        ))}
      </ContactList>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-invalid={!!error}
          aria-describedby="amount-error"
        />
        {error && <ErrorText id="amount-error">{error}</ErrorText>}
        <Button type="submit" disabled={isLoading || !selectedContact}>
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
        {success && (
          <div style={{ 
            color: '#4caf50', 
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>Transfer of ${amount} to {selectedContact?.name} was successful!</span>
            <button 
              onClick={resetForm}
              style={{
                background: 'none',
                border: '1px solid #4caf50',
                color: '#4caf50',
                borderRadius: '4px',
                padding: '0.25rem 0.5rem',
                cursor: 'pointer'
              }}
            >
              New Transfer
            </button>
          </div>
        )}
      </form>
    </Wrapper>
  );
};


export default QuickTransfer;
