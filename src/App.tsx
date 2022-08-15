import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {
  DashBoard,
  Login,
  QuestionManage,
  SignOutManage,
  UserManage,
} from './pages';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/habit" element={<DashBoard />} />
        <Route path="/push" element={<DashBoard />} />
        <Route path="/user" element={<UserManage />} />
        <Route path="/question" element={<QuestionManage />} />
        <Route path="/sign-out" element={<SignOutManage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
