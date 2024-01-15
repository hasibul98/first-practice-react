import React from "react";
import './menubarStyle.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import {homePage,personPage}  from '../allrouterpage';
function MenuBar(){
    return(
        <div>
            <ul>
                <li><Link to={homePage}>home</Link></li>
                <li><Link to={personPage}>personPage</Link></li>
                <li><Link to="/classtest">class test</Link></li>
                <li><Link to="/cowcontent">cowcontent</Link></li>
                <li><Link to="/allcontentdata">content Data</Link></li>
                {/* <li><Link to="/blogcontent/:title">BlogContent</Link></li> */}
                {/* <li><a href="/person">menu</a></li> */}
            </ul>
            {/* <Routes path='/' render={()=><h1>i am a man</h1>} /> */}

        </div>
    );
}
export default MenuBar;