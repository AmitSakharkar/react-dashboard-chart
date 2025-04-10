import styled from "styled-components";

export const Container = styled.div`
  width: 445px;
  height: 276px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 10px 40px rgba(31, 47, 70, 0.05);
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserList = styled.div`
  display: flex;
  gap: 20px;
  overflow: hidden;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 72px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
  text-align: center;
  color: #1f2f46;
`;

export const Role = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 2px;
  text-align: center;
  color: #7d8fb3;
`;

export const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background: #f3f6fb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7d8fb3;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f6f9ff;
  border-radius: 32px;
  padding: 10px 12px;
  margin-top: 20px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #7d8fb3;
  padding-left: 8px;
  outline: none;
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1f1f1f;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 18px;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  svg {
    font-size: 16px;
  }

  &:hover {
    background: #000000;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1f2f46;
  margin-bottom: 16px;
`;