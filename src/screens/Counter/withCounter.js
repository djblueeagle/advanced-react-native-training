// @flow

import * as React from 'react';

type State = {
  counter: number,
};

type Props = {
  onColorChange: any,
};

function withCounter<T>(Component: React.ComponentType<$Diff<any, any>>) {
  return class Enhancer extends React.Component<Props, State> {
    constructor() {
      super(...arguments);
      this.state = {
        counter: 0,
      };
    }

    render() {
      console.log('ad', this.props);
      return (
        <Component
          counter={this.state.counter}
          onIncrement={this._onIncrement}
          onDecrement={this._onDecrement}
          {...this.props}
        />
      );
    }

    _onIncrement = () => {
      this.props.onColorChange();
      this.setState({counter: this.state.counter + 1});
    };

    _onDecrement = () => {
      this.props.onColorChange();
      this.setState({counter: this.state.counter - 1});
    };
  };
}

export default withCounter;
