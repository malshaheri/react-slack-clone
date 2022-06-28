import React from "react";
import styled from "styled-components";

export default function Message() {
  return (
    <MessageContainer>
      <img
        src="https://c8.alamy.com/comp/K071AG/colorful-roses-flower-background-group-of-multicolor-rose-make-from-K071AG.jpg"
        alt="user"
      />
      <MessageInfo>
        <h4>
          User
          <span>{Date()}</span>
        </h4>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </MessageInfo>
      
    </MessageContainer>
  );
}

const MessageContainer = styled.div`

    >img {
        height: 50px;
        object-fit: cover;
        border-radius: 5px;
    }
    display: flex;
    padding: 15px;
    align-items: flex-start;

`;

const MessageInfo = styled.div`
    >h4 {
        font-size: 20px;
        padding-left: 15px;
        color: var(--slack-color);
    }
  >h4  >span{
        font-size: 10px;
        padding-left: 20px;
        color: lightgray;
    }
    >p{
        padding-top: 10px;
        padding-left: 15px;
        color: #494848;
    }

`;
