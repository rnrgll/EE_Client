import ButtonC from "../components/ButtonC";
import React, { useState } from "react";
import styled from "styled-components";
import Keytable from "../components/Keytable";
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

function Category() {
  const [activeContent, setActiveContent] = useState("data/time");

  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  };

  const contentComponents = {};

  return (
    <Container>
      <ButtonC onButtonClick={handleButtonClick} />
      {contentComponents[activeContent]}
      <Keytable/>
    </Container>
    
  );
}

export default Category;
