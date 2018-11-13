// @flow

import * as React from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import withLoginData from './withLoginData';

type Props = {
  email: string,
  password: string,
  onChangeEmail: () => void,
  onChangePassword: () => void,
  ShowAlert: () => void,
};

// eslint-disable-next-line
function LoginScreen(props: Props) {
  const {email, password, onChangeEmail, onChangePassword, ShowAlert} = props;
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={onChangeEmail} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
        />
      </View>
      <Button onPress={ShowAlert} title="Login" />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withLoginData(LoginScreen);
