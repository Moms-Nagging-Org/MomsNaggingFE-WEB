import { useState, useEffect } from 'react';
import * as Styled from './styled';
import { AddSVG } from '../../assets';
import { useRecoilValue } from 'recoil';
import { selectTitleState } from '../../recoil/recoil';

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
    console.log(check);
  };

  useEffect(() => {
    if (selectTitle === 'PUSH알림') {
      setMenuChoice({ ...menuChoice, number: 0, option: 'many' });
      console.log(check);
    } else if (selectTitle === '추천습관') {
      setMenuChoice({ ...menuChoice, number: 1, option: 'life' });
      console.log(check);
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
            onClick={e => clickFunc(e, index)}
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
