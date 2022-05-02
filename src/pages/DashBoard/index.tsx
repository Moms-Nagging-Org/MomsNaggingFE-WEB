import * as Styled from './styled';
import DashBox from '../../components/DashBox';

const DashBoard = () => {
  const dashMenu = ['서비스', 'IOS', 'AOS', '상장'];
  return (
    <>
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
    </>
  );
};

export default DashBoard;
