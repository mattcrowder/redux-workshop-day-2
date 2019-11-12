import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 10px 5px 5px red;
`;
const Todo = props => {
  return <Card>Message: {props.todo.message}</Card>;
};

Todo.propTypes = {
  todo: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};

export default Todo;
