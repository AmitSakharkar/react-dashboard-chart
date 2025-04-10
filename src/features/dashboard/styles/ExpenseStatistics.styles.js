import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

export const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  font-size: 1rem;
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LegendColor = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const LegendLabel = styled.span`
  flex: 1;
  font-size: 0.875rem;
`;

export const LegendValue = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
`;
