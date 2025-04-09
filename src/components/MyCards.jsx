import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 1.5rem;
  border-radius: 1.5rem;
  min-width: 250px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const MyCards = ({ cards }) => (
  <CardWrapper>
    {cards?.map((card, index) => (
      <Card key={index}>
        <h3>{card?.cardHolder}</h3>
        <p>**** **** **** {card?.cardNumber.slice(-4)}</p>
        <h2>₹{card?.balance}</h2>
      </Card>
    ))}
  </CardWrapper>
);

export default MyCards;