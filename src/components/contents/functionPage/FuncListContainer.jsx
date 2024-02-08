import React, { useState } from "react";
import styled from "styled-components";
import FunBox from "./FunBox";

const ContainerBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 78%;
  padding: 0px 60px;
  padding-top: 27px;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  //-----스크롤바 스타일링------//
  &::-webkit-scrollbar {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #d9d9d9;
  }
  //호버시 색상 변경
  &::-webkit-scrollbar-thumb:hover {
    background-color: #908f8f;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  //skeleton min-height 설쟁해둬서 필요없음.
  /* 
  @media screen and (max-height: 750px) {
    height: 76%;
  } */
`;

const typeList = [
  "STATISTICS",
  "DATE_TIME",
  "SEARCH_REFERENCE",
  "TEXT",
  "DATABASE",
];

function FuncListContainer({ funcList, listSize, sortingType, content }) {
  return (
    <ContainerBox>
      <div>
        {funcList.map((value) => {
          if (typeList.includes(sortingType)) {
            return (
              <FunBox
                key={value.id}
                funcName={value.name}
                funcId={value.id}
                content={content}
              ></FunBox>
            );
          } else {
            return (
              <FunBox
                key={value.functionId}
                funcName={value.name}
                funcId={value.functionId}
                content={content}
              ></FunBox>
            );
          }
        })}
      </div>
    </ContainerBox>
  );
}
export default FuncListContainer;
