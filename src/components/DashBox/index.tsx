import * as Styled from './styled';

interface Props {
  index: number;
}

const DashBox = ({ index }: Props) => {
  const optionData = [
    ['서비스 운영', '회원가입', '회원탈퇴', '문의작성'],
    ['(IOS) 앱 다운로드', '(IOS) 앱 삭제', '(IOS) 앱 평점', '(IOS) 앱 리뷰'],
    ['(AOS) 앱 다운로드', '(AOS) 앱 삭제', '(AOS) 앱 평점', '(AOS) 앱 리뷰'],
    ['우리 집 엄친아', '우리 동네 엄친아', '지구 엄친아', '우주 엄친아'],
  ];
  return (
    <>
      {optionData[index].map((v, i) => (
        <Styled.Wrapper key={v.toString()}>
          <Styled.Title>{v}</Styled.Title>
          <Styled.Content>null</Styled.Content>
        </Styled.Wrapper>
      ))}
    </>
  );
};

export default DashBox;
