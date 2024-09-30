import styled from "styled-components";
import { Icon } from "../../../Icon/icon";
import { Link } from "react-router-dom";

const LargeText = styled.div`
  font-size: 48px;
  line-height: 48px;
  font-weight: 600;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon size="70px" id="fa-code" display="flex" />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </div>
  </Link>
);

export const Logo = styled(LogoContainer)`
  display: flex;
  margin-right: -21px;
`;
