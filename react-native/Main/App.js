'use strict';

import React, {Component} from 'react';
import {
  View,
  AppRegistry,
  StyleSheet,
  Dimensions
} from 'react-native';

import images from 'images'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import TabbarItem from './TabbarItem'

import TabbarMainPage from '../component/MainTabbar/TabbarMainPage'
import TabbarOtherPage from '../component/OtherTabbar/TabbarOtherPage'
import TabbarMinePage from '../component/MineTabbar/TabbarMinePage'

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navigator />
    )
  }
}

const Tab = TabNavigator(
  {
    Home: {
      screen: TabbarMainPage,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({focused, tintColor}) => (
          <TabbarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={images.TabbarIcon.FIRST_DARK}
            selectedImage={images.TabbarIcon.FIRST_HIGHLIGHT}
          />
        )
      }),
    },
    Notifications: {
      screen: TabbarOtherPage,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '其他',
        tabBarIcon: ({focused, tintColor}) => (
          <TabbarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={images.TabbarIcon.OTHER_DARK}
            selectedImage={images.TabbarIcon.OTHER_HIGHLIGHT}
          />
        )
      }),
    },
    Mine: {
      screen: TabbarMinePage,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => (
          <TabbarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={images.TabbarIcon.MINE_DARK}
            selectedImage={images.TabbarIcon.MINE_HIGHLIGHT}
          />
        )
      }),
    },
  },
  {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: 'green', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      style: {
        marginTop: 0,
        backgroundColor: '#fff', // TabBar 背景色,
        height: 49,
        padding: 0,
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6',
      },
      iconStyle: {
        margin: 0,
      },
      labelStyle: {
        margin: 0,
        fontSize: 12, // 文字大小
      },
    }
  }
);

const Navigator = StackNavigator(
  {
    Tab: {screen: Tab}
  },
  {
    navigationOptions: {
      animationEnabled: true,
      headerStyle: {
        backgroundColor: 'white',
        width: width,
        height: __IOS__ ? 64 : 56
      },
    },
    mode: 'card',
  });