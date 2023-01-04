import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Steps from './components/Steps/Steps';

import './App.scss';

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className='app_container'>
      <div className='content_container'>
        <Sidebar/>
        <Steps/>
      </div>
    </div>
  );
}

export default App;
