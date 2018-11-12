// @flow

import * as React from 'react';
import Counter from './screens/Counter/Counter';
import withCounter from './screens/Counter/withCounter';
import withColorRandom from './screens/Counter/withColorRandom';
import CounterComponent from './screens/Counter/CounterComponent';

type Props = {
  color: string,
  onIncrement: () => void,
  onDecrement: () => void,
  counter: number,
};

function App(props: Props) {
  return (
    <CounterComponent
      color={props.color}
      onIncrement={props.onIncrement}
      onDecrement={props.onDecrement}
      counter={props.counter}
    />
  );
}

export default withColorRandom(withCounter(App));
