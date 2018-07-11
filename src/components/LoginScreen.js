import React, {Component} from 'react';
import { Platform, Text, View, ScrollView } from 'react-native';
import { Button, InputItem, List } from 'antd-mobile-rn';

type Props = {};

export default class LoginScreen extends Component<Props> {
  inputRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'Login to Jira'}>
          <InputItem
            clear
            error
            onErrorPress={() => alert('clicked me')}
            value={this.state.email}
            onChange={(value: any) => {
              this.setState({
                email: value,
              });
            }}
            placeholder="test@test.com"
          >
            Email
          </InputItem>
          <InputItem
            clear
            type="password"
            value={this.state.password}
            onChange={(value: any) => {
              this.setState({
                password: value,
              });
            }}
            placeholder="password"
          >
            Password
          </InputItem>
          <List.Item>
            <Button 
              onClick={() => {
                navigate('Home')
              }}
              type="primary">Login</Button>
          </List.Item>
        </List>
      </ScrollView>
    );
  }
}
