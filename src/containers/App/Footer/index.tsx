import './index.scss';
import React from 'react';
import Template from "containers/App/Template";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Template>
        <h2 className="footer__title title-h2"> Welcome to shop</h2>
      </Template>
    </footer>
  );
}

export default Footer;