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
  Grid,
  CardContent
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";
const Card = styled(MuiCard)`
  max-width: 345px;
  height: ${props => props.status === "COMPLETE" && "100px"};
`;
class Todo extends React.Component {
  state = {
    message: this.props.todo.message,
    isEditing: false
  };
  render() {
    const { todo } = this.props;
    const { isEditing, message } = this.state;
    return (
      <Card status={todo.status}>
        {todo.status === "INCOMPLETE" ? (
          <CardHeader
            title={todo.message}
            action={
              isEditing === false ? (
                <>
                  <IconButton key="done">
                    <DoneIcon />
                  </IconButton>
                  <IconButton
                    key="edit"
                    onClick={() => this.setState({ isEditing: !isEditing })}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton key="delete">
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
        ) : (
          <CardHeader title={todo.message} />
        )}
        <CardContent>
          <Collapse in={isEditing} timeout="auto" unmountOnExit>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <TextField
                  label="Message"
                  variant="outlined"
                  value={message}
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.setState({ isEditing: false })}
                >
                  UPDATE
                </Button>
              </Grid>
            </Grid>
          </Collapse>
        </CardContent>
      </Card>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};

export default Todo;
