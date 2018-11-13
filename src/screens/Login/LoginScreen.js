// @flow

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import withAlert from './withAlert';

type Props = {
  ShowAlert: () => void,
};

type State = {
  email: string,
  password: string,
};

const reducer = (action) => (state) => {
  switch (action.type) {
    case 'onChangeEmail': {
      return {
        ...state,
        email: action.email,
      };
    }
    case 'onChangePassword': {
      return {
        ...state,
        password: action.password,
      };
    }
    default: {
      return state;
    }
  }
};

// eslint-disable-next-line
class LoginScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const {email, password} = this.state;
    const {ShowAlert} = this.props;

    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <View>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(email) => {
              this.dispatch({type: 'onChangeEmail', email});
            }}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => {
              this.dispatch({type: 'onChangePassword', password});
            }}
          />
        </View>
        <Button onPress={ShowAlert} title="Login" />
      </View>
    );
  }

  dispatch = (action: any) => {
    this.setState(reducer(action));
  };
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withAlert(LoginScreen);
