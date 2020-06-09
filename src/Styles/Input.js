import react from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 20em;
  border: palevioletred 1px solid;
  padding: 0.35em;
  color: #333;

  &:focus {
    outline: none;
    border: #8C485E 1px solid;
  }
`;

export default Input;
