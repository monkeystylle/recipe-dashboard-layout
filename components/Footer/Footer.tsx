import React from 'react';
import styled from 'styled-components';

type Props = {};

const Footer = (props: Props) => {
  return <FooterContainer>Footer</FooterContainer>;
};

export const FooterContainer = styled.footer`
  display: flex;
  background: #00022e;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #fc86aa;
`;

export default Footer;
