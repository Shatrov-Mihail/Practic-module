import PropTypes from "prop-types";
import { forwardRef } from "react";
import styled from "styled-components";

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
  return <input className={className} ref={ref} {...props} />;
});

export const Input = styled(InputContainer)`
  font-size: 18px;
  width: ${({ width = "100%" }) => width};
  padding: 8px 10px;
  border: 1px solid #000;
`;

Input.propTypes = {
  width: PropTypes.string,
};
