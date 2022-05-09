import * as Styled from './styled';
import TabBar from '../../components/TabBar';

const HabitManage = () => {
  return (
    <Styled.Wrapper>
      <TabBar />
      <Styled.Table>
        <Styled.THead>
          <Styled.THeadRow>
            <Styled.HabitName>추천 습관 이름</Styled.HabitName>
            <Styled.Friendly>(1) 다정한 엄마</Styled.Friendly>
            <Styled.Cool>(2) 냉정한 엄마</Styled.Cool>
            <Styled.Angry>(3) 화가 많은 엄마</Styled.Angry>
          </Styled.THeadRow>
        </Styled.THead>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default HabitManage;
