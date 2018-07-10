import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile-rn';

type Props = {};

export default class HomeScreen extends Component<Props> {
  render() {
    return (<Button onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }>Home</Button>);
  }
}