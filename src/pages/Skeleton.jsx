import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ceebde;
  height: 93vh;
`;
const ServContainer = styled.div`
  display: flex;
  padding-top: 53px; //글자 위치 조절시 조정
  justify-content: center;
  background-color: #f9f8f8;
  height: 22%;
  text-align: center;
  font-size: 18px; //1/25
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;
  gap: 6px;

  > div {
    font-family: SUIT;
    font-weight: 700;
    word-wrap: break-word;
  }
`;

const Content = styled.div`
  width: 73%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 63vh; //viewport height로 수정
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 0px;
  padding: 0px 58px; //Content 좌우 여백 전체 적용
`;

export default function Skeleton() {
  return (
    <MainContainer>
      <ServContainer>
        슬기로운 엑셀 사용을 위한 통합정리 서비스,
        <span>Easy Excel</span>
      </ServContainer>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
}
