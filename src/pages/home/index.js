import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from '../../reportWebVitals';
import { getUrlParams } from '@/utils/getUrlParams';



document.title = '主页';

let code = getUrlParams(document.location.search, 'code') ?  getUrlParams(document.location.search, 'code') : '021REi000NlN3M1gNO100fNE3r2REi00';

ReactDOM.render(
	<React.StrictMode>
		<App code={code} />
	</React.StrictMode>,
	document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
