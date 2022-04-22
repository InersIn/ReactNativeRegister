/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {ScreenLoading} from './Components';
import {Register} from './Pages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {finish: false};
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({finish: true});
    }, 500);
  }

  render() {
    if (!this.state.finish) {
      return <ScreenLoading />;
    }
    return <Register />;
  }
}
