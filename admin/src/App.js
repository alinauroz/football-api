import React, { useEffect } from 'react'
import LeftBar from './components/LeftBar'
import './App.css'

import Login from './components/pages/Login'
import { request } from './utils/request'

const admin = JSON.parse(localStorage.getItem('admin') || '{}');
const isLoggedIn = cookieParser(document.cookie).type === 'admin';

export default function () {

  const [screen, setScreen] = React.useState('');
  const [base, setBase] = React.useState({isc: {}});
  const [users, setUsers] = React.useState(null);

  const setAppBase = (data, key, isc) => {
    if (isc) {
      base.isc[key] = data;
    }
    else {
      key = key ? key: screen;
      setBase({... base, [key]: data});
    }
  }

  useEffect(() => {
    //console.log(base);
  })

  const BUTTONS = Object.freeze([
    {title: 'Home', onClick : () => setScreen('Home')},
  ]);

  if (isLoggedIn) {
  return (
    <>
      <Topbar />
      <LeftBar 
        buttonList = {BUTTONS}
      />
      <div className = 'main-container'>
        
      </div>
    </>
  )
  }
  else {
    return <Login />
  }
}