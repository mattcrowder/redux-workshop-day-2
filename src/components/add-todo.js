import React from "react";
import {
  Modal as MuiModal,
  Button,
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  TextField
} from "@material-ui/core";
import styled from "styled-components";
const Modal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class AddTodo extends React.Component {
  state = { message: "" };
  addTodo = () => {
    this.props.closeModal();
    // this.props.addTodo()
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

export default AddTodo;
