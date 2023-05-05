import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// import Main from "../Main/Main.js";
// const IMGURLPREF = 'https://api.nomoreparties.co/';
import backgroundImage from '../../images/stars_backgr_group.svg'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { PAGES_INFO } from "../../utils/constants";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleClickNext = () => {
    const count = (counter === 0 || counter === 1) ? counter + 1 : 0;
    setCounter(count);
    
  };

  const page_info = PAGES_INFO[counter]

  return (
    <div className="root">
      <img className="app__backgr-image" alt='' src={backgroundImage}/>      
      <LeftSideBar counter={counter} clickHandle={handleClickNext} name={page_info.name}/>
      <div className="app__body">
        <Header />
        <Main page_info={page_info} />
        <Footer counter={counter}/>
      </div>
    </div>
    

  );
}
