import { useState, useRef } from 'react';
import { Header, Main } from './contect'
import './App.scss';
function App() {
  const [najot, setnajot] = useState(JSON.parse(window.localStorage.getItem('data')) || []);
    return (
      <>
        <Header setnajot = {setnajot}/>
        <Main najot = {najot} setnajot = { setnajot }/>
        {window.localStorage.setItem('data', JSON.stringify(najot))}
      </>
    )
}

export default App;
