import './app.scss';
import Nav from './component/Nav';
import Bubble from './component/Bubble';
import { useState } from 'react';
import Skillz from './component/Skillz';

import Content from './component/Content';

function App() {
  const [toogleContain, setToogleContain] = useState(false)
  return (
    <div className="App">
      {toogleContain === true ? <Skillz toogleFromRadarToCOntent={setToogleContain}/> : <Content toogleContainToRadar={setToogleContain}/>}
      {toogleContain === true ? " " : <Bubble /> }
{/* <Skillz /> */}
     {  } {/*  MAIN CONTENT */}
   {   } {/* BUBBLE ANIMATION ON BACKGROUND */}

    </div>
  );
}

export default App;
