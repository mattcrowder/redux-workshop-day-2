import React, { Component } from "react";
import PropTypes from "prop-types";

const Redux = React.createContext();

export class ReduxProvider extends Component {
  state = {
    store: this.props.store
  };
  render() {
    const { children } = this.props;
    return <Redux.Provider value={this.state.store}>{children}</Redux.Provider>;
  }
}

ReduxProvider.propTypes = {
  children: PropTypes.node,
  store: PropTypes.object
};

export const connect = (
  mapStateToProps = () => {},
  mapDispatchToProps = () => {}
) => {
  return YourComponent => {
    return class extends React.Component {
      static contextType = Redux;
      componentDidMount() {
        this.context.subscribe(() => this.forceUpdate());
      }
      render() {
        return (
          <YourComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        );
      }
    };
  };
};
