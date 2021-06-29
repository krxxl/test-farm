import './index.scss';
import React from 'react';
import Footer from "containers/App/Footer";
import Header from "containers/App/Header";
import Product from "containers/App/Products";

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
};

export default App;