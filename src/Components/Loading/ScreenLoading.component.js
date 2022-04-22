import React from 'react';

import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export default class ScreenLoading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screenLoading}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenLoading: {
    flex: 1,
    backgroundColor: '#34a6dd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
