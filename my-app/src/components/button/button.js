
import styled from "styled-components";

const ButtonContainer = ({children, className, width, ...props}) => {
	return (
			<button className={className} { ...props}>
				{children}
				</button>
	);
}


export const Button = styled(ButtonContainer)`
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
cursor: pointer;
font-size: 18px;
font-weight: 500;
width: ${({ width = "100%" }) => width};
hight: 32px;
background-color: rgb(238, 238, 238);
border: 1px solid rgb(0, 0, 0);`