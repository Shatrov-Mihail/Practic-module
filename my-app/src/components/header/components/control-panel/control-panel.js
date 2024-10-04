import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "../../../../components";
import styled from "styled-components";
import { ROLE } from "../../../../bff/constants/role";
import {
  selectUserLogin,
  selectUserRole,
  selectUserSession,
} from "../../../../selectors";
import { logout } from "../../../../actions";

const RightAligned = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;


const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const dispatch = useDispatch();
  const session = useSelector(selectUserSession);

  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>
            <StyledIcon>
              <Icon
                id="fa-sign-out"
                onClick={() => dispatch(logout(session))}
              />
            </StyledIcon>
          </>
        )}
      </RightAligned>
      <RightAligned>
        <StyledIcon onClick={() => navigate(-1)}>
          <Icon id="fa-backward" />
        </StyledIcon>
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
