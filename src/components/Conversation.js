import React from "react";
import styled from "styled-components";
import selfimg from "../Profile/selfimg.jpg";
import { SearchContainer, SearchInput } from "./Contactlist";
import emoji from "../Profile/emoji.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 3;
  background: #f0e3e7;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 4px 12px;
`;

const ContactName = styled.span`
  width: 100%;
  font-size: 20px;
  color: black;
`;

const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  alogn-items: center;
  bottom: 0px;
`;

const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.6;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MessageDiv = styled.div`
  display: flex;
  margin: 5px 15px;
`;

const Message = styled.div`
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
`;

const Conversation = () => {
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={selfimg}></ProfileImage>
        <ContactName>Rishi Raj</ContactName>
      </ProfileHeader>
      <MessageContainer>
        <MessageDiv></MessageDiv>
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
          <EmojiImage src={emoji}></EmojiImage>
          <SearchInput placeholder="Type a message"></SearchInput>
        </SearchContainer>
      </ChatBox>
    </Container>
  );
};

export default Conversation;
