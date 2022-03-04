import React from "react";
import { render } from 'react-dom';
import '../css/search.less';
const logo = require('../images/logo.png');
try {
    const rootElement = document.getElementById('root');
    console.log("运行");
    const App = () => {
        return <div className="hello">
            <div>hello word</div>
            <img src={logo}></img>
        </div>
    };
    render(<App />, rootElement)
} catch (e) {
    console.log('e', e);
}