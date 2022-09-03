import CustomLayout from '@/components/Layout';
import styled from 'styled-components';
import DashBox from '../components/DashBox';

const DashBoard = () => {
  const dashMenu = ['서비스', 'IOS', 'AOS', '상장'];
  return (
    <CustomLayout data={'1'} title="대시보드">
      {dashMenu.map((v, i) => (
        <Wrapper key={v.toString()}>
          <Title>
            {i + 1}.{dashMenu[i]}
          </Title>
          <Wrapper id={i !== 3 ? 'top' : ''}>
            <DashBox index={i} />
          </Wrapper>
        </Wrapper>
      ))}
    </CustomLayout>
  );
};

export default DashBoard;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  &#top {
    border-bottom: 1px dashed #bababa;
  }
`;

export const Title = styled.div`
  display: flex;
  color: #f43e51;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 4rem;
  width: 100%;
`;
