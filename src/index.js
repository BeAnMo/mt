import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';

/* OR for Material Theme:
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'
*/

import './css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {store, framework7StateKernel} from './store';
import {Framework7App, Statusbar, View} from 'framework7-react';

import {routes} from './routes';

ReactDOM.render(
    <Provider store={store}>
      <Framework7App
        themeType="ios"
        routes={routes}                
        router={false}
        stateKernel={framework7StateKernel}>
        <Statusbar />
        <App />
      </Framework7App>
    </Provider>,
    document.getElementById('root')
);
