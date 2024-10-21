import styled from "styled-components";
import { useServerRequest } from "../../../../hooks";
import { openModal, CLOSE_MODAL, removePostAsync } from "../../../../actions";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../../../components";
import { useDispatch } from "react-redux";

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() => {
            navigate("/");
          });
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  return (
    <div className={className}>
      <div className="published-at">
        {publishedAt && (
          <Icon
            inactive={true}
            id="fa-calendar-o"
            margin="0 7px 0 0"
            size="18px"
          />
        )}
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        {publishedAt && (
          <Icon
            id="fa-trash-o"
            margin="0 0 0 7px"
            size="21px"
            onClick={() => onPostRemove(id)}
          />
        )}
      </div>
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
