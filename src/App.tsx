import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Temp, Setting } from './pages';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
        <Route path="/setting" element={<Setting />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
