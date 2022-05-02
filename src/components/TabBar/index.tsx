import { useState } from 'react';
import * as Styled from './styled';
import { AddSVG } from '../../assets';

const TabBar = () => {
  const [menuCheck, setMenuCheck] = useState(0);
  const [check, setCheck] = useState('many');
  const clickFunc = (e: any, index: number) => {
    setMenuCheck(index);
    setCheck(e.target.id);
  };
  const menu = [
    { name: '정기성', option: 'many' },
    { name: '일회성', option: 'one' },
  ];
  return (
    <Styled.Wrapper id="top">
      <Styled.Wrapper>
        {menu.map((v, index) => (
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
