import React from 'react';
import logo from './logo.svg';
import AxioCaller from './Components/postList'
import WeatherApp from './Components/WeatherApp'
import HookState from './Components/HooksUseState'
import ClassComp from './Components/ComponentDidUpdateExp'
import HooksFunc from './Components/RunEffectExp'
import './App.css';
import './bg.css'

function App() {
  return (
    <div className="App">


    {/* <HooksFunc></HooksFunc> */}
      {/* <ClassComp></ClassComp> */}
      {/* <HookState></HookState> */}
      <WeatherApp></WeatherApp>
      {/* <AxioCaller></AxioCaller> */}
    </div>
  );
}

export default App;
