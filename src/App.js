// @flow

import * as React from 'react';

import Counter from './screens/Counter/Counter';
import {CounterReducer} from './screens/Counter/CounterReducer';
import {Provider, coduct} from './reduct/react-reduct';
import {createStore, combineReducers} from './reduct/reduct';

type Props = {};

const rootReducer = combineReducers({counter: CounterReducer});
const store = createStore(rootReducer);

// eslint-disable-next-line
function App(props: Props) {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
