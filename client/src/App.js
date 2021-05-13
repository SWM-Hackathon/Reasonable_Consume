import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    font-family: "애플 SD 산돌고딕 Neo", "Apple SD Gothic Neo", "Malgun Gothic", "arial sans-serif";
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

export default App;
