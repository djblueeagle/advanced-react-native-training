// @flow
import * as React from 'react';
import {Alert} from 'react-native';
type State = {};

function withAlert<T>(Component: React.ComponentType<T>) {
  return class Enhancer extends React.Component<T, State> {
    ShowAlert = () => {
      Alert.alert(`Welcome to Our Page`);
    };

    render() {
      return <Component ShowAlert={this.ShowAlert} {...this.props} />;
    }
  };
}

export default withAlert;
