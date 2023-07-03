import React from 'react';
import './home.scss';
import Topbar from '../components/topbar/Topbar';
import Featured from '../components/featured/Featured';
import List from '../components/list/List';

export default function Home() {
  return (
    <div className='home'>
     <Topbar/>
     <Featured/>
     <List/>
     <List/>
     <List/>
    </div>
  )
}
