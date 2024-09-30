import styled from "styled-components";
import { Icon } from "../../../Icon/icon";
import { Link, useNavigate } from "react-router-dom";

const RightAligned = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  width: 100px;
  hight: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  background-color: #eee;
`;

const StyledButton = styled.div`
&:hover {
  cursor: pointer;
}`

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
  return (
    <div className={className}>
      <RightAligned>
        <StyledLink to="/login">Войти</StyledLink>
      </RightAligned>
      <RightAligned>
        <StyledButton onClick={() => navigate(-1)}>
          <Icon id="fa-backward" />
        </StyledButton>
        <Link to="/post">
          <Icon id="fa-file-text-o" />
        </Link>
        <Link to="/">
          <Icon id="fa-users" />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
