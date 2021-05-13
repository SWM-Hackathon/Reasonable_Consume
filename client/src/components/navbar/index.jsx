import React from 'react';
import * as S from './style';
import { URLS } from '../../lib/constants/urls';

const Links = [
  { name: 'HOME', path: URLS.HOME },
  { name: 'ABOUT', path: URLS.ABOUT },
];

function NavBar() {
  return (
    <S.NavBarWrapper>
      <S.Title>Title</S.Title>
      <S.MenuWrapper>
        {Links.map(({ name, path }) => (
          <S.MenuItem exact href={path} key={name}>
            {name}
          </S.MenuItem>
        ))}
      </S.MenuWrapper>
    </S.NavBarWrapper>
  );
}

export default NavBar;
