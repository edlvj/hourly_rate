import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { Button, List, InputItem } from 'antd-mobile-rn';

type Props = {};

export default class SettingsScreen extends Component<Props> {
  inputRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      hourRate: '',
      tagretHours: ''
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
        <List renderHeader={() => 'Settings'}>
          <InputItem
            clear
            error
            value={this.state.hourRate}
            onChange={(value: any) => {
              this.setState({
                hourRate: value,
              });
            }}
            placeholder="0.00"
          >
            Hour Rate
          </InputItem>
          <List.Item>
            <Button>Save</Button>
          </List.Item>
        
        </List>
        <Button 
        onClick={() => {
          navigate('Home')
        }} 
        >Go to Home</Button>
      </ScrollView>);
  }
}