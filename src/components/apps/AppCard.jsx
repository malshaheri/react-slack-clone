import React from "react";
import styled from "styled-components";

export default function Appcard(props) {
  return (
    <CardColumn>
      <CardContainer>
        <img src={props.img}></img>
        <CardInfo>
          <h4>{props.name}</h4>
          <p>{props.description}</p>
        </CardInfo>
      </CardContainer>
    </CardColumn>
  );
}

const CardColumn = styled.div`
  flex: 25%;
  max-width: 24.6%;
  display: flex;
  @media (max-width: 1200px) {
    flex: 33%;
    max-width: 32%;
  }
  @media (max-width: 800px) {
    flex: 48%;
    max-width: 50%;
  }
  @media (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;
const CardContainer = styled.div`
  margin-top: 8px;
  display: flex;
  padding: 15px 5px 15px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin-bottom: 10px;
  > img {
    width: 40px;
    height: 40px;
  }
`;
const CardInfo = styled.div`
  > h4 {
    font-size: 20px;
    padding-left: 15px;
    color: var(--slack-color);
  }
  > p {
    text-align: justify;
    padding-top: 10px;
    padding-left: 15px;
    color: #494848;
    font-size: 13px;
  }
`;
