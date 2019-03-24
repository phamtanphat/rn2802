import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Singer from './Singer';
import Danhsach from './Danhsach';

const MyStack = createStackNavigator({
    Singer: {screen : Singer},
    Danhsach: {screen : Danhsach}
});


const Stack = createAppContainer(MyStack);
export default Stack;