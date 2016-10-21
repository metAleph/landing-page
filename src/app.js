import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components.jsx';
import { data, style } from './content.js';

ReactDOM.render(<App data={data} styleClass={style} />, document.getElementById('app'));