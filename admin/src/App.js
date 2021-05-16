import React, { useEffect } from 'react'
import LeftBar from './components/LeftBar'
import './App.css'

import Login from './components/pages/Login'
import Topbar from './components/Topbar'
import AddNews from './components/pages/AddNews'
import ViewNews from './components/pages/ViewNews'
import ViewTeams from './components/pages/ViewTeams'
import ViewMatches from './components/pages/ViewMatches'
import EditMatch from './components/pages/EditMatch'
import ViewTournaments from './components/pages/ViewTournaments'
import Feedback from './components/pages/Feedback'

import cookieParser from './utils/cookieParser'

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
    {title: 'Add News', onClick : () => setScreen('AddNews')},
    {title: 'View News', onClick : () => setScreen('ViewNews')},
    {title: 'View Teams', onClick : () => setScreen('ViewTeams')},
    {title: 'View Matches', onClick : () => setScreen('ViewMatches')},
    {title: 'Edit Match', onClick : () => setScreen('EditMatch')},
    {title: 'View Tournaments', onClick: () => setScreen('ViewTournaments')},
    {title: 'View Feedbacks', onClick: () => setScreen('ViewFeedbacks')}
  ]);

  if (isLoggedIn) {
  return (
    <>
      <Topbar />
      <LeftBar 
        buttonList = {BUTTONS}
      />
      <div className = 'main-container'>
        <div style = {{display : screen == 'AddNews' ? 'block' : 'none'}}>
          <AddNews base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewNews' ? 'block' : 'none'}}>
          <ViewNews base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewTeams' ? 'block' : 'none'}}>
          <ViewTeams base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewMatches' ? 'block' : 'none'}}>
          <ViewMatches base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'EditMatch' ? 'block' : 'none'}}>
          <EditMatch base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewTournaments' ? 'block' : 'none'}}>
          <ViewTournaments base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
        <div style = {{display : screen == 'ViewFeedbacks' ? 'block' : 'none'}}>
          <Feedback base = {base} setBase = {setAppBase} setScreen = {setScreen} />
        </div>
      </div>
    </>
  )
  }
  else {
    return <Login />
  }
}