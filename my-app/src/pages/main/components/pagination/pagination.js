import { Button } from "../../../../components";
import styled from "styled-components";

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
  return (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => setPage(1)}>В начало</Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1 )}>Предыдущая</Button>
      <div className="current-page">Страница:{page}</div>
      <Button disabled={page === lastPage} onClick={() => setPage(page + 1 )}>Следующая</Button>
      <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>В конец</Button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  justify-content: center;
  margin: 0 0 20px;
  padding: 0 35px;

& button {
  margin: 0 5px;
}

& .current-page {
  border: 1px solid #000;
  width: 100%;
  font-size: 18px;
	line-height: 26px;
  font-weight: 500;
  hight: 32px;

}
`
