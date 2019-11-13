import React from "react";

const Redux = React.createContext();

export const ReduxProvider = ({ children, store }) => {
  return <Redux.Provider value={store}>{children}</Redux.Provider>;
};

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return YourComponent => {
    return class extends React.Component {
      render() {
        return <YourComponent {...this.props} />;
      }
    };
  };
};
