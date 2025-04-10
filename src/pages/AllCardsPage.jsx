import React from "react";
import styled from "styled-components";
import { cardsData } from "../components/MyCards/CardData";
import masterCardIconDark from '../assets/icon/masterCardDark.svg';
import masterCardIconLight from "../assets/icon/masterCardLight.svg";
import chipIcon1 from '../assets/icon/chip1.svg';
import chipIcon2 from '../assets/icon/chip2.svg';

const PageContainer = styled.div`
  padding: 24px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  background: ${({ gradient }) => gradient};
  border-radius: 16px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  height: 190px;
  position: relative;
  overflow: hidden;
  border: ${props => props.cardID % 2 === 0 ? '1px solid rgba(0, 0, 0, 1)' : '1px solid rgba(223, 234, 242, 1)'}
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChipIcon = styled.img`
  width: 40px;
  height: auto;
`;

const CardLogo = styled.img`
  width: 50px;
  height: auto;
`;

const CardNumber = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
  font-family: 'Inter', sans-serif;
  margin-top: 40px;
  margin-bottom: 20px;
  color: ${props => props.cardID % 2 === 0 ? '#343C6A' : '#FFFFFF'};
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-right: 20px;
`;

const CardLabel = styled.span`
  font-size: 14px;
  opacity: 0.8;
  font-weight: 400;
  color: ${props => props.cardID % 2 === 0 ? '#718EBF' : '#FFFFFF'};
`;

const CardValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.cardID % 2 === 0 ? '#343C6A' : '#FFFFFF'};
`;

const AllCardsPage = () => {
  return (
    <PageContainer>
      <CardWrapper>
        {cardsData.map((card) => (
          <Card key={card.id} gradient={card.gradient} cardID={card.id}>
            <CardTop>
              <CardInfo>
                <CardLabel cardID={card.id}>Balance</CardLabel>
                <CardValue cardID={card.id}>${card.balance}</CardValue>
              </CardInfo>
              <ChipIcon src={card.id % 2 === 0 ? chipIcon2 : chipIcon1} alt="Chip" />
            </CardTop>
            <div style={{ 
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <CardInfo>
                <CardLabel cardID={card.id}>Card Holder</CardLabel>
                <CardValue cardID={card.id}>{card.holderName}</CardValue>
              </CardInfo>
              <CardInfo>
                <CardLabel cardID={card.id}>Expires</CardLabel>
                <CardValue cardID={card.id}>{card.expiryDate}</CardValue>
              </CardInfo>
            </div>
            <CardDetails>
              <CardNumber cardID={card.id}>{card.cardNumber}</CardNumber>
              <CardLogo src={card.id % 2 === 0 ? masterCardIconLight : masterCardIconDark} alt="Mastercard" />
            </CardDetails>
          </Card>
        ))}
      </CardWrapper>
    </PageContainer>
  );
};

export default AllCardsPage;
