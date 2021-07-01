import './index.scss';

import React from 'react';

import Template from "containers/App/Template";
import Nav from "containers/App/Header/Nav";
import Currency from "containers/App/Header/Currency";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Template>
        <div className="header__wrapper">
          <h1 className='header__title title-h1'>React + MobX + TypeScript</h1>
          <Currency/>
          <Nav/>
        </div>
      </Template>
    </header>
  );
};

export default Header;