import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {
  DashBoard,
  Develop,
  Login,
  QuestionManage,
  SignOutManage,
  UserManage,
  PushManage,
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

  .ant-menu-item-selected {
    background-color: rgba(255, 255, 255, 0.2) !important;
  }

  .ant-menu-inline .ant-menu-item::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    content: '';
  }

  .ant-layout-header {
    background: #f0f2f5;
  }

  .ant-layout-sider {
    background: #f43e51;
  }
  .ant-layout-sider-children{
    height: 100vh;
  }

  .ant-menu.ant-menu-dark {
    color: rgba(255, 255, 255, 0.65);
    background: #f43e51;
  }

  .ant-layout-content {
    padding: 25px 50px;
  }

  .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
    border: none;
    background-color: none;
  }

  .ant-pagination-item-active {
    border-color: #f43e51;

    a {
      color: #f43e51;
    }
  }

  .ant-btn-primary {
    background: none;
    border: none;
    box-shadow: none;
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
    padding-bottom: 0;
  }

  .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
  }

  .ant-btn-primary:hover, .ant-btn-primary:focus {
    color: none;
    border-color: none;
    background: none;
  }

  .ant-btn-primary:active {
    color: none;
    border-color: none;
    background: none;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/habit" element={<Develop />} />
        <Route path="/push" element={<PushManage />} />
        <Route path="/user" element={<UserManage />} />
        <Route path="/question" element={<QuestionManage />} />
        <Route path="/sign-out" element={<SignOutManage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
