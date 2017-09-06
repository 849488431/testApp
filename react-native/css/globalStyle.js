'use strict';

import {Dimensions, Platform, PixelRatio, StatusBar} from 'react-native'

const {width, height} = Dimensions.get('window');

const gScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  statusBarHeight: __IOS__ ? 0 : StatusBar.currentHeight,
  navBarHeight: __IOS__ ? 64 : 56,
  navBarPaddingHeight: __IOS__ ? 20 : 0,
  tabBarHeight: 49,
  onePix: 1 / PixelRatio.get(),
};