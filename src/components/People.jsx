import React from "react";
import styled from "styled-components";

export default function People() {
  return (
    <Container>
      <img
        style={{ width: "200px" }}
        src={`https://avatars.dicebear.com/api/croodles-neutral/:12888ddsf4ökkj.svg`}
        alt="mix"
      />{" "}
      <p>
        Why do we use it?
        It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
  
      </p>
    </Container>
  );
}

const Container = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
  margin: 150px;
  background-color: #9687bb;
 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
