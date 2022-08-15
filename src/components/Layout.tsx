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

const { Header, Content, Footer } = Layout;

const CustomLayout = ({ children, data, open, title }: Props) => {
  return (
    <StyledLayout data={data}>
      <SideBar open={open} />
      <StyledLayout data={data}>
        <StyledHeader>
          <Title>{title}</Title>
        </StyledHeader>
        <Content>{children}</Content>
        <Footer>@개발자 퉁이리</Footer>
      </StyledLayout>
    </StyledLayout>
  );
};

export default CustomLayout;

const StyledLayout = styled(Layout)<{
  data: null | '';
}>`
  height: ${(props) => props.data && '100vh'};
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #f43e51;
`;

const StyledHeader = styled(Header)``;
