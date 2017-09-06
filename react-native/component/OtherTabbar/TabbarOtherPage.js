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
} from 'react-native';

const {width, height} = Dimensions.get('window');
const RATIO_WIDTH = width / 375;

import {ImageTitle} from 'CustomNavigation';

export default class TabbarOtherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: (<ImageTitle title="其他"/>)
  });

  render() {
    return (
      <View style={{flex: 1}}>

      </View>
    )
  }
}

TabbarOtherPage.propType = {};

TabbarOtherPage.defaultProps = {};

let styles = StyleSheet.create({
});