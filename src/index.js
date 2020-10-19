import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import userData from './data/users.json';

ReactDOM.render(<App rows={userData} />, document.getElementById('root'));
