import AddSVG from '@/assets/AddSVG';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectTitleState } from '../../recoil/recoil';
import * as Styled from './styled';

const menu = [
  [
    { name: '정기성', option: 'many' },
    { name: '일회성', option: 'one' },
  ],
  [
    { name: '생활', option: 'life' },
    { name: '운동', option: 'exercise' },
    { name: '성장', option: 'growth' },
    { name: '생산성', option: 'productivity' },
    { name: '식습관', option: 'eating' },
    { name: '기타', option: 'andSoOn' },
  ],
];

const TabBar = () => {
  const selectTitle = useRecoilValue<string>(selectTitleState); // 사이드 메뉴(PUSH, 추천습관)
  const [menuChoice, setMenuChoice] = useState({ number: 0, option: 'many' }); //사이드 메뉴(PUSH, 추천습관) 초기 활성화
  const [menuCheck, setMenuCheck] = useState(0); //세부 메뉴
  const [check, setCheck] = useState(menu[menuChoice.number][menuCheck].option); //체크 표시
  const clickFunc = (e: any, index: number) => {
    setMenuCheck(index);
    setCheck(e.target.id);
    // console.log(check);
    /**
     * - 위 console.log에서 확인하는 check state값은
     *   useState로 값을 변경한다고 바로 값이 업데이트 되지 않습니다.
     *
     * # 이유
     *   * useState로 값이 update되는 방식은 '비동기'방식 입니다.
     *   * usestate update async로 검색해서 내용을 찾아보면 좋을 것 같습니다.
     *   * 나아가 js에서 비동기 동작 원리를 찾아서 알아 놓는것도 좋을 것 같습니다.
     *    * keyword는 eventLoop 입니다.
     *
     * # 비동기로 업데이트 된 state를 확인하는 방법은?
     *   * useEffect에 dependency list에 update된 state를 참고1과 같이 넣어서 확인할 수 있습니다.
     *   * 업데이트 된 state를 처리해주고 싶으면 위에 작성한 방법 처럼 dependency list를 설정한 useEffect에서 처리해주시면 됩니다.
     */
  };

  // 참고1
  useEffect(() => {
    console.log({ menuCheck, check });
  }, [menuCheck, check]);

  useEffect(() => {
    console.log({ selectTitle });
    if (selectTitle === 'PUSH알림') {
      setMenuChoice({ ...menuChoice, number: 0, option: 'many' });
      // console.log(check);
    } else if (selectTitle === '추천습관') {
      setMenuChoice({ ...menuChoice, number: 1, option: 'life' });
      // console.log(check);
    }
  }, [selectTitle]);

  return (
    <Styled.Wrapper id="top">
      <Styled.Wrapper>
        {menu[menuChoice.number].map((v, index) => (
          <Styled.MenuTitle
            key={v.name}
            id={v.option}
            check={check}
            onClick={(e) => clickFunc(e, index)}
          >
            {v.name}
          </Styled.MenuTitle>
        ))}
      </Styled.Wrapper>
      {check === 'one' ? (
        <Styled.Wrapper id="content" onClick={() => alert('개발중입니다!')}>
          <AddSVG />
          추가하기
        </Styled.Wrapper>
      ) : null}
    </Styled.Wrapper>
  );
};

export default TabBar;
