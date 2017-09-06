/**
 * @providesModule CustomNavigation
 */

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
const {width, height} = Dimensions.get('window');

const NAVIGATION_HEIGHT = __IOS__ ? 44 : 56;
const STATUS_BAR_HEIGHT = __IOS__ ? 0 : StatusBar.currentHeight;
const NAVIGATION_PADDING = __IOS__ ? 20 : 0;
const ITEM_WIDTH = 0.15 * width;

class ImageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    return this.props.title !== nextProps.title
  }

  render() {
    let {title, style, titleStyle} = this.props;
    return (
      <Image
        resizeMode={'stretch'}
        style={[styles.container, style]}
        source={images.Navigation.TITLE_BACKGROUND}
        defaultSource={images.Navigation.TITLE_BACKGROUND}
      >
        <Text style={[styles.title, titleStyle]}>
          {title}
        </Text>
      </Image>
    )
  }
}

class BackItem extends Component {

  shouldComponentUpdate(nextProps) {
    return false
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
        }}
      >
        <Image source={images.Navigation.RETURN}/>
      </TouchableOpacity>
    )
  }
}

class RightItem extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.source !== nextProps.source;
  }

  render() {

    let {source, onPress} = this.props;
    return (
      <TouchableOpacity
        style={styles.navItem}
        onPress={onPress || (() => {
        })}
      >
        <Image source={source}/>
      </TouchableOpacity>
    )
  }
}

module.exports = {
  ImageTitle,
  BackItem,
  RightItem
};

let styles = StyleSheet.create({
  container: {
    width: width,
    height: __IOS__ ? 64 : 56,
    backgroundColor: 'white',
    top: __IOS__ ? -10 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: NAVIGATION_PADDING,
  },
  title: {
    width: 0.7 * width,
    fontSize: __IOS__ ? 17 : 18,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  navItem: {
    backgroundColor: 'transparent',
    width: ITEM_WIDTH,
    height: NAVIGATION_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  }
});