import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Card as MuiCard,
  IconButton,
  CardHeader,
  Collapse,
  TextField,
  Button,
  CardContent
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";
import { connect } from "../solutions/react-redux";
import * as actions from "../actions";

const Card = styled(MuiCard)`
  max-width: 345px;
  width: ${props => props.status === "COMPLETE" && "200px"};
  height: ${props => props.status === "COMPLETE" && "100px"};
`;

const CollapseContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
class Todo extends React.Component {
  state = {
    message: this.props.todo.message,
    isEditing: false
  };

  updateMessage = () => {
    this.props.updateTodo({ ...this.props.todo, message: this.state.message });
    this.setState({ isEditing: false });
  };

  deleteTodo = () => {
    this.props.deleteTodo(this.props.todo.id);
  };

  markComplete = () => {
    this.props.updateTodo({ ...this.props.todo, status: "COMPLETE" });
  };
  render() {
    const { todo } = this.props;
    const { isEditing, message } = this.state;
    return (
      <Card
        status={todo.status}
        aria-label={`${
          todo.status === "INCOMPLETE" ? "Incomplete" : "Completed"
        } ${todo.message}`}
      >
        {todo.status === "INCOMPLETE" ? (
          <>
            <CardHeader
              title={todo.message}
              action={
                isEditing === false ? (
                  <>
                    <IconButton
                      onClick={this.markComplete}
                      key="done"
                      aria-label={`mark ${todo.message} complete`}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label={`edit ${todo.message}`}
                      key="edit"
                      onClick={() => this.setState({ isEditing: !isEditing })}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={this.deleteTodo}
                      key="delete"
                      aria-label={`delete ${todo.message}`}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    key="cancel"
                    onClick={() => this.setState({ isEditing: false })}
                  >
                    <CancelIcon />
                  </IconButton>
                )
              }
            />
            <CardContent>
              <Collapse in={isEditing} timeout="auto" unmountOnExit>
                <CollapseContent>
                  <TextField
                    inputProps={{ "aria-label": "message" }}
                    label="Message"
                    variant="outlined"
                    value={message}
                    onChange={e => this.setState({ message: e.target.value })}
                  />
                  <Button
                    aria-label="submit todo message update"
                    variant="contained"
                    color="primary"
                    onClick={this.updateMessage}
                  >
                    UPDATE
                  </Button>
                </CollapseContent>
              </Collapse>
            </CardContent>
          </>
        ) : (
          <CardHeader title={todo.message} />
        )}
      </Card>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(actions.deleteTodo(id)),
    updateTodo: todo => dispatch(actions.updateTodo(todo))
  };
};
export default connect(undefined, mapDispatchToProps)(Todo);
