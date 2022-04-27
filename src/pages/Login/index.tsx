import * as Styled from "./styled";
import Logo from "../../assets/logo.svg";
import { Positioner } from "../../components/Wrapper/styled";

const Login = () => {
  return (
    <Positioner>
      <Styled.GlobalStyle />
      <img src={Logo} />
    </Positioner>
  );
};

export default Login;
