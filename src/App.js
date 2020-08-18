import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./containers/Body";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import './components/css/colors/default.css';
import './components/css/bootstrap.css';
import './components/css/main.css';
import './components/css/style.css';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  )
}
