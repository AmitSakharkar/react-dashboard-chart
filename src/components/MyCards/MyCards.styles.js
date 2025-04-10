import styled from 'styled-components';

export const CardsWrapper = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;

  @media(min-width: 768px) {
    flex-direction: column;
    overflow-x: unset;
  }
`;
