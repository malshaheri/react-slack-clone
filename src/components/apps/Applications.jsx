import React from "react";
import styled from "styled-components";
import AppCard from "./AppCard";
import Data from "./Data";

export default function Apps() {
  const appCards = Data.map((card) => {
    return <AppCard key={card.id} {...card} />;
  });
  return <AppsContainer>{appCards}</AppsContainer>;
}

const AppsContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 10px;
  gap: 5px;
`;
