import React from "react";
import {
  Modal as MuiModal,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  TextField
} from "@material-ui/core";
import styled from "styled-components";
import * as actions from "../actions";
import { connect } from "../react-redux";
const Modal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class AddTodo extends React.Component {
  state = { message: "" };
  addTodo = () => {
    this.props.closeModal();
  };
  render() {
    const { open, closeModal } = this.props;
    const { message } = this.state;
    return (
      <Modal open={open} onClose={closeModal}>
        <Card>
          <CardHeader title="Add Todo" />
          <CardContent>
            <TextField
              variant="outlined"
              inputProps={{
                "aria-label": "message"
              }}
              label="Message"
              value={message}
              onChange={e => this.setState({ message: e.target.value })}
            />
          </CardContent>
          <CardActions>
            <Button
              aria-label="save todo"
              variant="outlined"
              color="primary"
              onClick={this.addTodo}
            >
              Save
            </Button>
          </CardActions>
        </Card>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: message => dispatch(actions.addTodo(message))
  };
};
export default connect(undefined, mapDispatchToProps)(AddTodo);
