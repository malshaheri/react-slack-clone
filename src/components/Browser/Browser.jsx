import ImageUpload from "./ImageUpload";
import React, { useState } from "react";
// import { db } from "../../firebase";
import styled from "styled-components";

export default function Browser() {
  const [fileDialogState, setFileDialog] = useState(false);

  const uploadImage = (file, contentType) => {};

  return (
     <BrowserContainer>
         <input
    //         onChange={onMessageChange}
    //         fluid={true}
    //         name="message"
    //         value={messageState}
    //         label={createActionButtons()}
    //         labelPosition="right"
         />
    <ImageUpload
      uploadImage={uploadImage}
      open={fileDialogState}
      onClose={() => setFileDialog(false)}
    />
 </BrowserContainer>
  );
}

const BrowserContainer = styled.div`
  display: flex;
`;
