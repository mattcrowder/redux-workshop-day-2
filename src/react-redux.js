import React, { Component } from "react";
import * as PropTypes from "prop-types";

// Create a ReduxProvider component that takes in children and store as props
// and returns a React context provider, that has a value of the store that
// was passed in.
// Then go back to app.js
// For bonus points, do something special to handle referential equality
export class ReduxProvider extends Component {
  render() {
    const { children } = this.props;
    return children;
  }
}

ReduxProvider.propTypes = { children: PropTypes.node, store: PropTypes.object };

// 1) Connect to the redux provider with static contextType = ReduxContext
// 2) subscribe to state changes with the subscribe method by adding
//    this.context.subscribe(() => this.forceUpdate()) in componentDidMount
// 3) Call `mapStateToProps(this.context.store.getState()` and pass the result
//    into <YourComponent/>
export const connect = () => {
  return YourComponent =>
    class extends React.Component {
      render() {
        return <YourComponent {...this.props} />;
      }
    };
};
