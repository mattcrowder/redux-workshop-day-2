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
import { connect } from "../solutions/react-redux";
const Modal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class AddTodo extends React.Component {
  state = { message: "" };
  addTodo = () => {
    this.props.addTodo(this.state.message);
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
              label="Message"
              value={message}
              onChange={e => this.setState({ message: e.target.value })}
            />
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="primary" onClick={this.addTodo}>
              Save
            </Button>
          </CardActions>
        </Card>
      </Modal>
    );
  }
}

const mapStateToProps = () => {};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: message => dispatch(actions.addTodo(message))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
