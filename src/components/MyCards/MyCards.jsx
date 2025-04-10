import React from "react";
import styled from "styled-components";
import chipIcon1 from '../../assets/icon/chip-1.svg';
import chipIcon2 from '../../assets/icon/chip-2.svg';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: ${({ gradient }) => gradient};
  border-radius: 28px;
  width: 280px;
  height: 180px;
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CardNumber = styled.div`
  font-size: 1.25rem;
  letter-spacing: 3px;
  font-family: "Courier New", monospace;
  text-align: center;
  margin: 1rem 0;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Label = styled.div`
  font-size: 0.75rem;
  color: #e0e0e0;
  font-weight: 400;
`;

const Balance = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

const cardsData = [
  {
    id: 1,
    cardNumber: "**** **** **** 7829",
    balance: "₹35,000.00",
    gradient: "linear-gradient(135deg, #3E8EED, #2445A0)",
  },
  {
    id: 2,
    cardNumber: "**** **** **** 3421",
    balance: "₹15,000.00",
    gradient: "linear-gradient(135deg, #FF512F, #DD2476)",
  },
];

const MyCards = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 font-inter">My Cards</h2>
      <CardWrapper>
        {cardsData.map((card) => (
          <Card key={card.id} gradient={card.gradient}>
            <CardTop>
              <img src={id % 2 == 0 ? chipIcon2 : chipIcon1} alt="Chip" width={36} height={24} />
            </CardTop>

            <CardNumber>{card.cardNumber}</CardNumber>

            <CardBottom>
              <Label>Balance</Label>
              <Balance>{card.balance}</Balance>
            </CardBottom>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
};

export default MyCards;
