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
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'Login'}>
          <InputItem
            clear
            error
            onErrorPress={() => alert('clicked me')}
            value={this.state.email}
            onChange={(value: any) => {
              this.setState({
                email,
              });
            }}
            placeholder="test@test.com"
          >
            Email
          </InputItem>
          <Button>Login</Button>
        </List>
      </ScrollView>
    );
  }
}
