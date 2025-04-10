import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

export const NoData = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #718EBF;
  font-size: 16px;
  text-align: center;
`;

export const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color || '#000'};
`;

export const LegendLabel = styled.span`
  font-size: 14px;
  color: #718EBF;
`;

export const LegendValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #343C6A;
`;
