import React, {Component} from 'react';
import { Text } from 'react-native';
import { WingBlank, WhiteSpace, Button, Flex, List } from 'antd-mobile-rn';

type Props = {};

export default class HomeScreen extends Component<Props> {
  inputRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      daySalary: 0,
      dayHours: 0
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <List renderHeader={() => 'Home'}>
          <Flex>
            <Flex.Item>
              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center'
                }}
              >
                Day Statisic:
              </Text>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <Text
              style={{
                fontSize: 24,
                textAlign: 'center'
              }}
            >
              Salary: { this.state.daySalary } $
            </Text>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>  
            <Flex.Item>
              <Text
              style={{
                fontSize: 24,
                textAlign: 'center'
              }}
            >
              Hours: { this.state.dayHours } hours
            </Text>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>  
            <Flex.Item>

            </Flex.Item>
          </Flex>
          <Flex>  
            <Flex.Item>
              <Button
                onClick={() => {
                  navigate('Settings')
                }} >
                Go to Settings
              </Button>
            </Flex.Item>
          </Flex>
        </List>);
  }
}