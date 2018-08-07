import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { Button, InputItem, List } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import { logIn } from '../actions/user';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { navigate } = this.props.navigation;

    console.log('shouldComponetUpdate');
    console.log('login');

    if (nextProps.logIn != this.props.logIn && nextProps.logIn === true) {
      navigate('Home')
      return false;
    }
    if (nextProps.status == 'error' || nextProps.status == 'done') {
      alert('Erorr')
      return false;
    }
    return true;
}

  handleSubmit = () => {
    const { dispatch } = this.props;
    console.log(this.state.email);
    console.log(this.state.password);

    const params = {
      username: this.state.email,
      password: this.state.password
    };

    dispatch(logIn(params));
  }

  validateEmail = (value) => {
    let formErrors = {email: ''};
    
    if(value.length === 0) {
      formErrors['email'] = 'Email can not be blank';
    }

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) !== true) {
      formErrors['email'] = 'Wrong format of email';
    }

    if(!formErrors['email']) {
      this.setState({emailValid: true});
    } else {
      this.setState({emailValid: false});
    }

    this.setState({formErrors: formErrors});
  }

  validatePassword = (value) => {
    let formErrors = {password: ''};

    if(value.length === 0) {
      formErrors['password'] = 'Password can not be blank';
    }
 
    if(!formErrors['password']) {
      this.setState({passwordValid: true});
    } else {
      this.setState({passwordValid: false});
    }

    this.setState({formErrors: formErrors});
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
            error={this.state.formErrors['email'] ? true : false}
            onErrorClick={() => 
              alert(this.state.formErrors['email'])
            }
            type="email"
            value={this.state.email}
            onChange={(value) => {
              this.setState({
                email: value,
              },
              () => { 
                this.validateEmail(value) 
              });
            }}
            placeholder="test@zapleo.com"
          >
            Email
          </InputItem>
          <InputItem
            clear
            error={this.state.formErrors['password'] ? true : false}
            onErrorClick={() => alert(this.state.formErrors['password'])}
            type="password"
            value={this.state.password}
            onChange={(value) => {
              this.setState({
                password: value,
              },
              () => { 
                this.validatePassword(value) 
              });
            }}
            maxLength={24}
            placeholder="password"
          >
            Password
          </InputItem>
          <List.Item>
            <Button 
              disabled={ this.state.emailValid && this.state.passwordValid ? false : true }
              onClick={() => {
                this.handleSubmit()
              }}
              type="primary">Login</Button>
          </List.Item>
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const userReducer = state.userReducer;
  return {
    logIn: userReducer.logIn,
    user: userReducer.user,
    loading: userReducer.loading
  }
}

export default connect(mapStateToProps)(LoginScreen);
