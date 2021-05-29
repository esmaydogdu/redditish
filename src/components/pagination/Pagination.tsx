import { Pagination as BPagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { usePosts } from "../../contexts";

export const Pagination = () => {
  // Pagination component should know how many pages there will be,
  // and it should render pagination items accordingly.
  const history = useHistory();
  const { posts, perPage } = usePosts();

  // Storing the active page number in state which is read from history.
  // Set to 1 if history doesn't have that parameter.
  const params = new URLSearchParams(history.location.search);
  const [activePage, setActivePage] = useState(Number(params.get("page") || 1));

  // Calculates the total page number with given perPage post amount.
  const totalPageCount = Math.ceil(posts.length / perPage);
  // Filling up the pagination array.
  const pageNumbers = [];
  for (let i = 1; i <= totalPageCount; i++) {
    pageNumbers.push(i);
  }

  // Adds the page parameter into search parameters
  const handleClickPage = (page: number) => {
    const params = new URLSearchParams(history.location.search);
    params.set("page", String(page));
    history.push({ pathname: "/", search: params.toString() });
  };

  // Active page is set, when history gets changed(e.g. sort params changes)
  useEffect(() => {
    return history.listen(() => {
      const params = new URLSearchParams(history.location.search);
      /* istanbul ignore next */
      setActivePage(Number(params.get("page")) || 1);
    });
    // eslint-disable-next-line
  }, []);

  // When there is no page, pagination will not render.
  /* istanbul ignore if */
  if (pageNumbers.length === 0) {
    return null;
  }

  return (
    <BPagination
      data-testid="pagination-wrapper"
      className="mt-3 d-flex flex-row justify-content-center"
    >
      {activePage > 1 && (
        <BPagination.Prev
          data-testid="pagination-previous"
          onClick={() => handleClickPage(activePage - 1)}
        />
      )}

      {pageNumbers.map((page, index) => {
        /* istanbul ignore next */
        return (
          <BPagination.Item
            data-testid="pagination-item"
            active={page === activePage}
            key={page}
            onClick={() => handleClickPage(page)}
          >
            {page}
          </BPagination.Item>
        );
      })}
      {activePage < pageNumbers.length && (
        <BPagination.Next
          data-testid="pagination-next"
          onClick={() => handleClickPage(activePage + 1)}
        />
      )}
    </BPagination>
  );
};
