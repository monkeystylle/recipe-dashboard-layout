import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayout) => {
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened(prev => !prev);
  };

  return (
    <Container>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Content>
        <Sidebar isOpened={isOpened} />
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #000133;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const PageContainer = styled.div`
  padding: 20px;

  width: 80vw;
`;

export default DashboardLayout;
