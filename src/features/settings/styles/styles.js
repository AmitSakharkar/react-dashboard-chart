import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const UploadButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background: #1f1f1f;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CameraIcon = styled.div`
  color: #fff;
  font-size: 16px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  color: #000;
`;

export const SaveButton = styled.button`
  padding: 12px 30px;
  background: #1f1f1f;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #000;
  }
`;

export const Tab = styled.button`
  padding: 12px 24px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  color: ${({ active }) => (active ? "#000" : "#7d8fb3")};
  background: none;
  border: none;
  border-bottom: ${({ active }) => (active ? "2px solid #000" : "2px solid transparent")};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #000;
  }
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 30px;
`;

export const TabPanel = styled.div`
  padding-top: 10px;
`;
