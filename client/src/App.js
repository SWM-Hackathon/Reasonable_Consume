import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import PricePage from './pages/PricePage';
import IntroPage from './pages/IntroPage';
import MarketPage from './pages/MarketPage';
import AboutPage from './pages/AboutPage';
import NavBar from './components/navbar';
import Sidebar from './components/sidebar'

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle)
  }
  return (
    <div id="container">
      <GlobalStyle />
      <NavBar toggle={toggle} toggleHandler={toggleHandler}/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/price" component={PricePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/market/:marketCode" component={MarketPage} />
      </Switch>
      {toggle && <Sidebar toggle={toggle} toggleHandler={toggleHandler}/>}
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: 'Hanna', fantasy;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color : gray;
  }
  body, html {
    margin: 0;
    padding: 0;
    background-color: #eff3f7;
    height: 100%;
    width: 100%;
  }
  #root, #container {
    width: 100%;
    height: 100%;
  }
`;

export default App;
