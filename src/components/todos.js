import React from "react";
import Todo from "./todo";
import { connect } from "../react-redux";
import { Typography, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddTodo from "./add-todo";
import styled from "styled-components";
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
const mapStateToProps = () => {};
const mapDispatchToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
