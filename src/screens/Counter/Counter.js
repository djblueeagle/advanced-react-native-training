// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {coduct} from '../../reduct/react-reduct';
import {Text} from '../../core-ui';

type Props = {
  onIncrement: Function,
  onDecrement: Function,
  counter: number,
};

type State = {
  counter: number,
};

class Counter extends Component<Props, State> {
  render() {
    const {onIncrement, onDecrement, counter} = this.props;
    return (
      <View style={styles.root}>
        <TouchableOpacity style={styles.button} onPress={onIncrement} />
        <Text style={styles.counterText}>{counter}</Text>
        <TouchableOpacity style={styles.button} onPress={onDecrement} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({type: 'INCREMENT'}),
  onDecrement: () => dispatch({type: 'DECREMENT'}),
});

export default coduct(mapStateToProps, mapDispatchToProps)(Counter);

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffc425',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
  },
  counterText: {
    fontSize: 130,
    color: 'white',
  },
});
