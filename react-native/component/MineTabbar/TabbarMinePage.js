'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  InteractionManager,
  Dimensions,
  StyleSheet,
  requireNativeComponent
} from 'react-native';

const {width, height} = Dimensions.get('window');
const RATIO_WIDTH = width / 375;

import {ImageTitle, RightItem} from 'CustomNavigation';

var RecordViewManager = requireNativeComponent('RecordViewManager', null);

export default class TabbarMinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: (<ImageTitle title="我的"/>)
  });

  render() {
    return (
      <View style={{flex: 1}}>
        <RecordViewManager />
      </View>
    )
  }
}

TabbarMinePage.propType = {};

TabbarMinePage.defaultProps = {};

let styles = StyleSheet.create({
});