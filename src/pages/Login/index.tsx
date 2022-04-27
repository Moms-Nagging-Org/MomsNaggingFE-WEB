import { useState, useCallback } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo';
import { Positioner } from '../../components/Wrapper/styled';

const Login = () => {
  let navigate = useNavigate();
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const onChangeID = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  }, []);
  const onChangePW = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  }, []);

  return (
    <Positioner>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Logo />
        <Styled.Input onChange={onChangeID} id="top" type="text" placeholder="아이디" />
        <Styled.Input onChange={onChangePW} type="password" placeholder="비밀번호" />
        <Styled.Button
          onClick={() => navigate('/setting')}
          background="#f28590"
          disabled={!(id === 'moms' && pw === 'nagging')}
        >
          로그인
        </Styled.Button>
      </Styled.Wrapper>
    </Positioner>
  );
};

export default Login;
