import React, { useState } from 'react';
import styled from 'styled-components';
import chipIcon1 from '../../assets/icon/chip-1.svg';
import chipIcon2 from '../../assets/icon/chip-2.svg';
import mastercardIconDark from '../../assets/icon/mastercardDark.svg';
import mastercardIconLight from '../../assets/icon/masterCardLight.svg';

const Card = styled.div`
  flex: 0 0 auto;
  width: 280px;
  height: 170px;
  background: ${({ gradient }) => gradient};
  border-radius: 20px;
  padding: 1rem;
  margin-right: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media(min-width: 768px) {
    width: 100%;
    max-width: 400px;
    margin-bottom: 1rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Balance = styled.div`
  font-size: 1rem;
`;

const MiddleRow = styled.div`
  font-size: 1.3rem;
  letter-spacing: 2px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

const ChipContactless = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const ExpiryName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardLogo = styled.img`
  width: 50px;
`;

const CardItem = ({ id, holder, number, expiry, brand, balance, gradient }) => {

  const getBrandIcon = () => {
    if (id % 2 == 0) { 
        return mastercardIconLight;
    } else { 
        return mastercardIconDark;
    }
  };

  return (
    <Card gradient={gradient}>
      <TopRow>
        <ChipContactless>
          <img src={id % 2 == 0 ? chipIcon2 : chipIcon1} alt="chip" width="30" />
        </ChipContactless>
      </TopRow>

      <MiddleRow>
        <ExpiryName>
        <div><div>CARD HOLDER</div><div>{holder}</div></div>
        <div><div>VALID THRU</div><div>{expiry}</div></div>
        </ExpiryName>
      </MiddleRow>

      <BottomRow>
      {number}
        <CardLogo src={getBrandIcon()} alt={brand} />
      </BottomRow>
    </Card>
  );
};

export default CardItem;
