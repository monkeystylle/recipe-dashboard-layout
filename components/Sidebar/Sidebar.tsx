import React from 'react';
import styled from 'styled-components';
import { MENU_ITEMS } from '../../constants/menu-items';
import MenuItemsList from '../MenuItemsList';

type SidebarProps = {
  isOpened: boolean;
};

const Sidebar = ({ isOpened }: SidebarProps) => {
  return (
    <SidebarContainer isOpened={isOpened}>
      <MenuItemsList options={MENU_ITEMS}></MenuItemsList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  background: #d8dcd6;

  width: ${props => (props.isOpened ? '20vw' : '0vw')};
  transition: width 0.5s;
  overflow: hidden;
`;

export default Sidebar;
