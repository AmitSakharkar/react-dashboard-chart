import React, { useState } from "react";
import users from "./users";
import {
  Container,
  UserList,
  User,
  Avatar,
  Name,
  Role,
  Arrow,
  InputWrapper,
  Input,
  SendButton,
  SliderWrapper,
  Title
} from "../styles/QuickTransfer.styles";
import { FiArrowRight, FiSend } from "react-icons/fi";

const USERS_PER_PAGE = 3;

const QuickTransfer = () => {
  const [amount, setAmount] = useState("525.50");
  const [page, setPage] = useState(0);

  const startIdx = page * USERS_PER_PAGE;
  const endIdx = startIdx + USERS_PER_PAGE;
  const visibleUsers = users.slice(startIdx, endIdx);

  const hasMore = endIdx < users.length;

  const handleNext = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    } else {
      setPage(0); // Loop back to start
    }
  };

  return (
    <Container>
      <Title>Quick Transfer</Title>
      <SliderWrapper>
        <UserList>
          {visibleUsers.map((user) => (
            <User key={user.id}>
              <Avatar src={user.image} />
              <Name>{user.name}</Name>
              <Role>{user.role}</Role>
            </User>
          ))}
        </UserList>
        <Arrow onClick={handleNext}>
          <FiArrowRight />
        </Arrow>
      </SliderWrapper>

      <InputWrapper>
        <Input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <SendButton>
          Send <FiSend />
        </SendButton>
      </InputWrapper>
    </Container>
  );
};

export default QuickTransfer;
