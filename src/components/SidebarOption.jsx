import React from 'react';
import styled from 'styled-components';

function SidebarOption({ Icon, title, addChannelOption }) {
  const addChannel = () => {};

  const selectChannel = () => {};

  return (
    <SidebarOptionContianer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon style={{ padding: '10px' }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <h3>
            <span>#</span>
            {title}
          </h3>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContianer>
  );
}

export default SidebarOption;

const SidebarOptionContianer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  padding-left: 5px;
  font-size: 12px;
  transition: 0.5s;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }
`;

const SidebarOptionChannel = styled.div`
  padding: 10px;
  > h3 {
    font-weight: 300;
    > span {
      padding-right: 10px;
    }
  }
`;
