import React from "react";
import { render } from 'react-dom';
import '../css/search.less';
const logo = require('../images/logo.png');
const rootElement = document.getElementById('root');
console.log("运行");


const App = () => {
	// let [show,setShow] = useState<boolean>(false)
	return (
		<div className="hello">
			{/* {show?'nihao':'buhao'} */}
			<img src={logo}></img>
		</div>
	)
};
render(<App />, rootElement)
