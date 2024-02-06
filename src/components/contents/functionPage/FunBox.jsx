import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FunctionBox = styled.div`
  width: 33%;
  min-width: 180px;
  /* margin: 0px 12px; */
  min-height: 40px;
  font-size: 100%;
  /* font-size: 18px; */
  color: black;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  /* padding: 0px 20px; */
  padding-right: 20px;
  /* background-color: pink; */
  word-break: break-all;
  &:hover {
    cursor: pointer;
    color: #107c41;
    text-decoration: underline; /* 텍스트 밑줄 추가 */
    /* background-color: #107c41; */
  }
`;

export default function FunBox({ funcId, funcName }) {
  const navigate = useNavigate();
  const onClickBox = (event) => {
    navigate(`/home/function/${funcName}`, {
      state: { funcId },
    });
  }; //함수를 클릭하면 함수 정보로 navigate

  return <FunctionBox onClick={onClickBox}>{funcName}</FunctionBox>;
}
