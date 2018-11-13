// @flow
import * as React from 'react';
import {Alert} from 'react-native';
type State = {
  email: string,
  password: string,
};

function withLoginData<T>(Component: React.ComponentType<T>) {
  return class Enhancer extends React.Component<T, State> {
    constructor() {
      super(...arguments);
      this.state = {
        email: '',
        password: '',
      };
    }

    onChangeEmail = (email: string) => {
      this.setState({
        email,
      });
    };

    onChangePassword = (password: string) => {
      this.setState({
        password,
      });
    };

    ShowAlert = () => {
      Alert.alert(`Welcome ${this.state.email}`);
    };

    render() {
      return (
        <Component
          email={this.state.email}
          password={this.state.password}
          onChangeEmail={this.onChangeEmail}
          onChangePassword={this.onChangePassword}
          ShowAlert={this.ShowAlert}
          {...this.props}
        />
      );
    }
  };
}

export default withLoginData;
