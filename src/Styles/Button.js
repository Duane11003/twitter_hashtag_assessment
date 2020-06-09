import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  padding: 0.25em 1em;
  background: palevioletred;
  font-size: 1em;
  margin: 1em;
  border: transparent;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s all ease-out;

  &:hover {
    background-color: #8c485e;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
