import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import styled from "styled-components";
import { Authorization, Registration } from "./pages";


const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100vh;
  background-color: #fff;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 120px 0;
`;




export const Blog = () => {
  return (
    <AppColumn>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<div>Пользователи</div>} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:postId" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
};
