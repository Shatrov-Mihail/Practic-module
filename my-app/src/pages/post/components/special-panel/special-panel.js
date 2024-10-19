import styled from "styled-components";
import { Icon } from "../../../../components";

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
  return (
    <div className={className}>
      <div className="published-at">
        <Icon
          id="fa-calendar-o"
          margin="0 7px 0 0"
          size="18px"
          onClick={() => {}}
        />
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        <Icon id="fa-trash-o" size="21px" onClick={() => {}} />
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
