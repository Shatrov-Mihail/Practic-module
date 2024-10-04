import { forwardRef } from "react";
import styled from "styled-components";


const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return (
		<div>
			<input className={className} { ...props} ref={ref} />
		</div>
	);
})

export const Input = styled(InputContainer)`
highth: 100px;
width: ${({ width = "100%" }) => width};
margin: 0 0 10px;
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 18px;

`