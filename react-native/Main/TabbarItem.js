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
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class TabbarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {focused, selectedImage, normalImage, tintColor} = this.props;
    return (
      <Image
        source={ focused ? selectedImage : normalImage }
        style={ {tintColor: tintColor, width: 25, height: 25} }
      />
    )
  }
}

TabbarItem.propType = {};

TabbarItem.defaultProps = {};