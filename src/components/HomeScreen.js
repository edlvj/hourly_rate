import React, { Component } from 'react';
import { Text } from 'react-native';
import { WhiteSpace, Button, Flex, List } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import { getWorklog } from '../actions/worklog';
import { logOut } from '../actions/user';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daySalary: 0,
      dayHours: 0
    };
  }
  
  componentDidMount() {
    
    console.log(this.props);
    
    const { dispatch, username, session } = this.props;
    console.log("Homemountet")
    dispatch(getWorklog(username, session));
  }

  updateHours = () => {
    const { dispatch, username, session } = this.props;
    dispatch(getWorklog(username, session));
  }
  
  logout = () => {
    const { dispatch, navigation } = this.props;
    dispatch(logOut()).then(() => {
      navigation.navigate('Login');
    });  
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
                Day Statistic:
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
              <Button
                onClick={() => {
                  this.updateHours()
                }}
                >
                Reload
              </Button>
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
          <Flex>  
            <Flex.Item>
              <Button
                onClick={() => {
                  this.logout()
                }}
                >
                Log out
              </Button>
            </Flex.Item>
          </Flex>
        </List>);
  }
}

const mapStateToProps = state => {
  const userReducer = state.userReducer;
  const worklogReducer = state.worklogReducer;
  return {
    username: userReducer.user.username,
    session: userReducer.session,
    loading: worklogReducer.loading,
    worklogs: worklogReducer.worklogs
  }
}

export default connect(mapStateToProps)(HomeScreen);