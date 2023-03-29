import React, {
    // useState,
    useReducer,
  } from 'react';
  import { render } from 'react-dom';
  import { statusReducer } from './api';
  import '../css/search.less';
  // const logo = require('../images/logo.png');
  const rootElement = document.getElementById('root');
  console.log("运行");
  
  
  
  const App = () => {
   // let [show,setShow] = useState<boolean>(false)
    const [state, dispatch] = useReducer(statusReducer, { show: false });
   return (
      <div className="hello">
        {state.show ? 'nihao' : 'buhao'}
        {/* < img src={logo}></img> */}
        <button onClick={() => dispatch({ type: 'UPDATE_SHOW', payload: !state.show })}>button</button>
      </div>
    );
  };
  
  render(<App />, rootElement)