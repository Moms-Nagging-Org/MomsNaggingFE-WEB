import CustomLayout from '@/components/Layout';
import DashBox from '../../components/DashBox';
import * as Styled from './styled';

const DashBoard = () => {
  const dashMenu = ['서비스', 'IOS', 'AOS', '상장'];
  return (
    <CustomLayout data={'1'} title="대시보드">
      {dashMenu.map((v, i) => (
        <Styled.Wrapper key={v.toString()}>
          <Styled.Title>
            {i + 1}.{dashMenu[i]}
          </Styled.Title>
          <Styled.Wrapper id={i !== 3 ? 'top' : ''}>
            <DashBox index={i} />
          </Styled.Wrapper>
        </Styled.Wrapper>
      ))}
    </CustomLayout>
  );
};

export default DashBoard;
