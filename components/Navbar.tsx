import React,{FC,useState} from "react";
import {SearchBarProps} from './interfaces/interfaces';


const Navbar : FC<SearchBarProps> =({
  menu,
  isActiveHeader,
  closeSearch,
  searchPage
})=>{



  return (
  <>
    <div className={`${isActiveHeader ? 'visible':'invisible'}  px-4`} >
      sadasdads

    </div>
  </>); 
}

export  {Navbar};
