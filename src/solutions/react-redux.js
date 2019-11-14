import React from "react";

const Redux = React.createContext();

export const ReduxProvider = ({ children, store }) => {
  return <Redux.Provider value={store}>{children}</Redux.Provider>;
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
