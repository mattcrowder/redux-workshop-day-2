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
`;

const Todo = props => {
  const { todo } = props;
  const [message, setMessage] = React.useState(props.todo.message);
  const [isEditing, setEditing] = React.useState(false);

  return (
    <Card>
      <CardHeader
        title={todo.message}
        action={
          isEditing === false ? (
            <>
              <IconButton key="done">
                <DoneIcon />
              </IconButton>
              <IconButton key="edit" onClick={() => setEditing(!isEditing)}>
                <EditIcon />
              </IconButton>
              <IconButton key="delete">
                <DeleteIcon />
              </IconButton>
            </>
          ) : (
            <IconButton key="cancel" onClick={() => setEditing(false)}>
              <CancelIcon />
            </IconButton>
          )
        }
      />
      <CardContent>
        <Collapse in={isEditing} timeout="auto" unmountOnExit>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <TextField
                label="Message"
                variant="outlined"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setEditing(false)}
              >
                UPDATE
              </Button>
            </Grid>
          </Grid>
        </Collapse>
      </CardContent>
    </Card>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};

export default Todo;
