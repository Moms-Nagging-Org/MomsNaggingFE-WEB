import SideBar from '@/components/SideBar';
import { Layout } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  open?: string;
  title: string;
  data?: any;
}

const { Header, Content } = Layout;

const CustomLayout = ({ children, data, open, title }: Props) => {
  return (
    <Layout>
      <SideBar open={open} />
      <Layout>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #f43e51;
`;
