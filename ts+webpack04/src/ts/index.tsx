import React from "react";
import { render } from 'react-dom';
import '../css/search.less';
try {
    const rootElement = document.getElementById('root');
    console.log("运行");
    const App = () => {
        return <div className="hello">
            <div>hello word</div>
            <img src="../images/logo.png"></img>
        </div>
    };
    render(<App />, rootElement)
} catch (e) {
    console.log('e', e);
}