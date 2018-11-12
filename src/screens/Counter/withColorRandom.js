// @flow

import * as React from 'react';

type State = {
  color: string,
};

function withColorRandom<T>(Component: React.ComponentType<T>) {
  return class Enhancer extends React.Component<T, State> {
    constructor() {
      super(...arguments);
      this.state = {
        color: this.getRandomColor(),
      };
    }

    getRandomColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.setState({
        color,
      });
      return color;
    };

    render() {
      return (
        <Component
          color={this.state.color}
          onColorChange={this.getRandomColor}
          {...this.props}
        />
      );
    }
  };
}

export default withColorRandom;
