import React, { Component } from "react";

import { store$ } from "./store";

export const connect = mapStateToProps => WrappedComponent => {
  return class extends Component {
    state = {};
    subscription = null;

    componentDidMount() {
      this.subscription = store$.subscribe(state =>
        this.setState(mapStateToProps(state))
      );
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};
