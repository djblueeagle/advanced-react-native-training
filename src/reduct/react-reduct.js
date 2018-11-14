// @flow

import * as React from 'react';

const Reduct = React.createContext({});

type Store = {
  getState: () => Object,
  dispatch: ({type: string, [key: string]: mixed}) => void,
  subscribe: (Function) => Function,
};

type ProviderProps = {
  store: Store,
  children: React$Node,
};

function Provider(props: ProviderProps) {
  const {store, children} = props;
  return <Reduct.Provider value={store}>{children}</Reduct.Provider>;
}

function coduct(mapStateToProps: Function, mapDispatchToProps: Function) {
  return (Component: React.ComponentType<*>) => {
    return class Enhancer extends React.Component<*, *> {
      unsubscribe: () => void;
      static contextType = Reduct;

      componentDidMount() {
        let store = this.context;
        this.unsubscribe = store.subscribe(this._handleUpdate);
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      _handleUpdate = () => {
        this.forceUpdate();
      };

      render() {
        let store = this.context;
        const deriviedState = mapStateToProps(store.getState());
        const deriviedAction = mapDispatchToProps(store.dispatch);
        return (
          <Component {...deriviedState} {...deriviedAction} {...this.props} />
        );
      }
    };
  };
}

export {Provider, coduct};
