import PropTypes from "prop-types";
import { forwardRef } from "react";
import styled from "styled-components";

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
  return (
    <div>
      <input className={className} {...props} ref={ref} />
    </div>
  );
});

export const Input = styled(InputContainer)`
  width: ${({ width = "100%" }) => width};
  highth: 100px;
  margin: 0 0 10px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
`;

Input.propTypes = {
  width: PropTypes.string,
};