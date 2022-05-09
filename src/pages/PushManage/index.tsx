import * as Styled from './styled';
import TabBar from '../../components/TabBar';

const PushManage = () => {
  return (
    <Styled.Wrapper>
      <TabBar />
      <Styled.Table>
        <Styled.THead>
          <Styled.THeadRow>
            <Styled.Day>요일</Styled.Day>
            <Styled.Time>시간</Styled.Time>
            <Styled.Friendly>(1) 다정한 엄마</Styled.Friendly>
            <Styled.Cool>(2) 냉정한 엄마</Styled.Cool>
            <Styled.Angry>(3) 화가 많은 엄마</Styled.Angry>
          </Styled.THeadRow>
        </Styled.THead>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default PushManage;
