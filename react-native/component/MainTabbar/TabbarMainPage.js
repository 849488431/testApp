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
  StyleSheet
} from 'react-native';

import images from 'images'
const {height, width} = Dimensions.get('window');
import {ImageTitle, RightItem} from 'CustomNavigation';

export default class TabbarMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: (<ImageTitle title="首页"/>),
    headerRight: (
      <RightItem
        source={images.Navigation.SEARCH}
        onPress={() => {console.log('$$$$$$$$$$$')}}
      />
    ),
  });

  render() {
    return (
      <View style={{flex: 1}}>

      </View>
    )
  }
}

TabbarMainPage.propType = {};

TabbarMainPage.defaultProps = {};

let styles = StyleSheet.create({

});