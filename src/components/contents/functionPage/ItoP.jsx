import React from "react";
import Container from "./FuncListContainer";

export default function ItoP({ functionsList, sortingType }) {
  return (
    <Container
      funcList={functionsList}
      listSize={functionsList.length}
      sortingType={sortingType}
    />
  );
}
