import { Constants } from 'expo';
import { Constants } from 'expo';
import { NetInfo, Platform, StatusBar, StyleSheet, Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Status extends Component {
  state = {
    info: null,
  };

  render() {
    const { info } = this.state;

    const isConnected = info !== 'none';
    const backgroundColor = isConnected ? 'white' : 'red';

    const statusBar = (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? 'dark-content' : 'light-content'}
        animated={false}
      />
    );

    if (Platform.OS === 'ios') {
      return <View style={[styles.status, { backgroundColor }]}>{statusBar}</View>
    }

    return null;
  }
};

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  status: {
    zindex: 1,
    height: statusHeight
  }
});
