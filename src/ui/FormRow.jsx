import React from 'react';
import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-flow: column wrap;
  row-gap: 0.3em;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    // margin-bottom: 2.4rem;
  }

  &:not(:last-child) {
    // border-bottom: 1px solid global.$color_grey_100;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function FormRow({ children, other_class }) {
  return <StyledFormRow className={other_class}>{children}</StyledFormRow>;
}

export default FormRow;
