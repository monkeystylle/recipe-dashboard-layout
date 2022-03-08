import React from 'react';
import styled from 'styled-components';
import { Menu, ChevronLeft } from '@styled-icons/material';

interface IHeader {
  isOpened: boolean;
  toggleDrawer: () => void;
}

const Header = ({ isOpened, toggleDrawer }: IHeader) => {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer>
      <TitleContainer>Header</TitleContainer>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  display: flex;
  background: #1f1235;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #fc86aa;
`;

export const TitleContainer = styled.div`
  margin: auto;
`;

const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  & svg {
    height: 30px;
  }
`;

export default Header;
