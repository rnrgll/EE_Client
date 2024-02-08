import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo/Logo.svg";

const LogoImg = styled.img`
  width: 270px;
  /* width: 33vh; */
  margin: auto;
  background-size: cover;
  /* position: absolute;
  top: 76px; */
`;

export default function Home() {
  return <LogoImg src={Logo} />;
}
