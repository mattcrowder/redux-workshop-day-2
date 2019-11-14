import React from "react";
import Todo from "./todo";
import { connect } from "../react-redux";
import { Typography, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddTodo from "./add-todo";
import styled from "styled-components";
import { getCompleteTodos, getIncompleteTodos } from "../selectors";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Todos extends React.Component {
  state = {
    isAdding: false
  };
  render() {
    const { incompleteTodos, completeTodos } = this.props;
    return (
      <Container>
        <Typography variant="h4">Incomplete todos</Typography>
        {incompleteTodos.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
        <Typography variant="h4">Completed todos</Typography>
        {completeTodos.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
        <Fab
          aria-label="add todo"
          color="secondary"
          onClick={() => this.setState({ isAdding: true })}
        >
          <AddIcon />
        </Fab>
        {/* Force a remount so the local state gets cleared */}
        {this.state.isAdding && (
          <AddTodo
            open={this.state.isAdding}
            closeModal={() => this.setState({ isAdding: false })}
          />
        )}
      </Container>
    );
  }
}

Todos.defaultProps = {
  incompleteTodos: [],
  completeTodos: []
};
const mapStateToProps = state => {
  return {
    incompleteTodos: getIncompleteTodos(state),
    completeTodos: getCompleteTodos(state)
  };
};

export default connect(mapStateToProps)(Todos);
