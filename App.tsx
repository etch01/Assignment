/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Provider } from 'react-redux';
import NavContainer from './src/Navigation/AppContainer';
import {store} from  './src/Redux/store';

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <NavContainer/>
    </Provider>
  );
};

export default App;
