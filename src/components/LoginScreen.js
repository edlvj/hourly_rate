import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { Button, InputItem, List } from 'antd-mobile-rn';
import { logIn } from '../actions/user';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

//   shouldComponentUpdate(nextProps, nextState) {
//     let { navigate } = this.props.navigation;

//     if (nextProps.logIn != this.props.logIn && nextProps.logIn === true) {
//         navigate('Home')
//         return false;
//     }
//     if (nextProps.status == 'error' || nextProps.status == 'done') {
//         alert('Erorr')
//         return false;
//     }
//     return true;
// }

  login = () => {
    const { dispatch } = this.props;
  
    let errors = validateForm(this.state);
    if(errors.length > 0) {
      alert(errors.split());
      return false;
    }

    const params = {
      username: this.state.username,
      password: this.state.password
    };

    alert(this.state.email);
    //dispatch(logIn(params));
  }

  validateForm = (email, passe) => {
    let errors = [];

    if(typeof this.state.email === 'undefined') {
      this.state.errors = 'Email can not be blank';
    }

    if(this.state.email.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==0) {
      this.state.valid = false;
    }
  }

  render() {
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
            type="email"
            value={this.state.email}
            onChange={(value) => {
              this.setState({
                email: value,
              });
            }}
            placeholder="test@zapleo.com"
          >
            Email
          </InputItem>
          <InputItem
            clear
            type="password"
            value={this.state.password}
            onChange={(value) => {
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
                this.login()
              }}
              type="primary">Login</Button>
          </List.Item>
        </List>
      </ScrollView>
    );
  }
}
