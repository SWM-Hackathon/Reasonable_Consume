import React, { useState } from 'react';
import { BsTextRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import * as S from './style';

function NavBar(props) {
  const { toggle, toggleHandler } = props
  return (
    <S.NavBarWrapper>
      <Link to="/">
        <S.Title>착한 소마</S.Title>
      </Link>
      <S.MenuWrapper onClick={toggleHandler}>
        {!toggle && <BsTextRight />}
      </S.MenuWrapper>
    </S.NavBarWrapper>
  );
}

export default NavBar;
