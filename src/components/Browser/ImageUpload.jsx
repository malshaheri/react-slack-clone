import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ImageUpload(props) {
  const [fileState, setFileState] = useState(null);
  const acceptedTypes = ["image/png", "image/jpeg"];

  const onFileAdd = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileState(file);
    }
  };

  const submit = () => {
    props.uploadImage(fileState);
    props.onClose();
    setFileState(null);
  };

  return (
    <ImageContainer open={props.open} onClose={props.onClose}>
      <Header>
        <h4>Select a image</h4>
      </Header>

      <ImageMessages>
        <ImageInput>
          <input
            type="file"
            name="file"
            onChange={onFileAdd}
            label="File Type (png, jpeg"
            placeholder="Please insert an image file..."
            pattern="([^\s]+(\.(?i)(jpg|png|gif|bmp))$)"
          />
        </ImageInput>
        <button name="checkmark" onClick={submit}>
          Add
        </button>
        <button name="remove" onClick={props.onClose}>
          Cancel
        </button>

        <ImageBottom></ImageBottom>
      </ImageMessages>
    </ImageContainer>
  );
}
const ImageContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
  margin-top: 70px;
  justify-content: center;
`;
const Header = styled.div`
  justify-content: center;
  align-items: center;

  > h4 {
    font-size: 20px;
    padding: 15px;
    color: var(--slack-color);
    width: 100%;
    text-align: center;
  }
`;

const ImageMessages = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 15px;
  color: var(--slack-color);
  > button {
    background-color: transparent;
    font-size: 15px;
    color: lightgray;
    background-color: #ca6262;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 5px;
    border-radius: 3px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 5px;

    :hover {
      color: var(--slack-color);
      cursor: pointer;
    }
  }
`;
const ImageBottom = styled.div``;
const ImageInput = styled.div`
  > input {
    width: 100%;
    border-radius: 3px;
    outline: none;
    padding: 15px;
    border: 1px solid lightgray;
  }
`;
