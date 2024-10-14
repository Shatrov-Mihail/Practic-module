import { ControlPanel, Logo } from "./components";
import styled from "styled-components";

const Description = styled.div`
  font-style: italic;
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description>
      Веб-технологии
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </Description>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  height: 120px;
  padding: 20px 40px;
  justify-content: space-between;
  display: flex;
  width: 1000px;
  box-shadow: 0px -5px 17px;
  background-color: #fff;
  top: 0;
  position: fixed;
  z-index: 10;
`;
