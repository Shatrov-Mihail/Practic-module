import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal, CLOSE_MODAL, removePostAsync } from "../../../../actions";
import { Icon } from "../../../../components";
import { useServerRequest } from "../../../../hooks";
import { checkAccess } from "../../../../utils";
import { selectUserRole } from "../../../../selectors";
import { ROLE } from "../../../../constants";
import styled from "styled-components";

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();
  const userRole = useSelector(selectUserRole);

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() =>
            navigate("/")
          );
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  const isAdmin = checkAccess([ROLE.ADMIN], userRole);

  return (
    <div className={className}>
      <div className="published-at">
        {publishedAt && <Icon id="calendar-o" size="18px" />}
        {publishedAt}
      </div>
      {isAdmin && (
        <div className="buttons">
          {editButton}
          {publishedAt && (
            <Icon
              isButton={true}
              id="trash-o"
              size="21px"
              onClick={() => onPostRemove(id)}
            />
          )}
        </div>
      )}
    </div>
  );
};
export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => margin} || "-20px 0 20px;

   & .buttons {
	display: flex;
	align-items: center;
}

 & i {
    position: relative;
    top: -1px;

  }

    & .published-at {
    display: flex;
    align-items: center;
	font-size: 18px;
  }

`;

SpecialPanel.propTypes = {
  id: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  editButton: PropTypes.node.isRequired,
};
