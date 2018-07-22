import React from 'react';
import {render} from 'react-dom';
import {makeHTTPDriver} from '@cycle/http';
import {WarpedApp} from 'warped-components';
import {devToolsEnhancer} from 'redux-devtools-extension';
import Root from './containers/Root';

const drivers = {http: makeHTTPDriver()};

render(
  <WarpedApp drivers={drivers} enhancer={devToolsEnhancer()}>
    <Root />
  </WarpedApp>,
  document.getElementById('root')
);
