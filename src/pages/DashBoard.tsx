import CustomLayout from '@/components/Layout';
import useFetch from '@/hooks/useFetch';
import { DashBoardResponse } from '@/interface';
import styled from 'styled-components';

const dashMenu = ['총 회원 수', '문의사항 개수', '엄친아'];

const loadingLv = {
  nofLv1: 0,
  nofLv2: 0,
  nofLv3: 0,
  nofLv4: 0,
};

const DashBoard = () => {
  const { data: dashData } = useFetch<DashBoardResponse>('/dashboard', 'GET');

  return (
    <CustomLayout data={'1'} title="대시보드">
      {dashMenu.map((v, i) => (
        <Wrapper key={v.toString()}>
          <Title>
            {i + 1}. {dashMenu[i]}
          </Title>
          <Wrapper id={i !== 3 ? 'top' : ''}>
            {i === 2 ? (
              <>
                {Object.keys(dashData?.grade ?? loadingLv).map(
                  (value, index) => (
                    <Card key={value.toString()}>
                      <LevelTitle>{value}</LevelTitle>
                      <CardTitle>{dashData?.grade[value] ?? 0}</CardTitle>
                    </Card>
                  )
                )}
              </>
            ) : (
              <Card key={v.toString()}>
                {i === 0 ? (
                  <CardTitle>{dashData?.service.nofUsers ?? 0} 명</CardTitle>
                ) : (
                  <CardTitle>
                    {dashData?.service.nofQuestions ?? 0} 개
                  </CardTitle>
                )}
              </Card>
            )}
          </Wrapper>
        </Wrapper>
      ))}
    </CustomLayout>
  );
};

export default DashBoard;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  gap: 2rem;
  &#top {
    border-bottom: 1px dashed #bababa;
  }
`;

const Title = styled.div`
  display: flex;
  color: #f43e51;
  font-weight: bold;
  font-size: 1.2rem;
  width: 15%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

const CardTitle = styled.div`
  font-weight: bold;
`;

const LevelTitle = styled.div`
  font-size: small;
  padding-bottom: 5px;
`;
