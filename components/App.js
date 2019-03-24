/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Giaodien from './components/Giaodien';
import Danhsach from './components/Danhsach';
import Singer from './components/Singer';

export default class App extends Component {
  render() {
    return (
      <Singer/>
      
    );
  }
}

