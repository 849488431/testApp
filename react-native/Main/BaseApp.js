'use strict';

import React from 'react';
import {AppRegistry} from 'react-native';
import App from '../Main/App'

let testApp = React.createClass({
  render: function () {
    return (
      <App />
    );
  }
});

AppRegistry.registerComponent('testApp', () => testApp);