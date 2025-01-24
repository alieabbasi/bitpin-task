import { FC } from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ page, totalPages, setPage }) => {
  const isFirstEnabled = page > 2;
  const isSecondEnabled = page > 3;
  const isFirstDisableEnabled = page >= 5;
  const isLastEnabled = page < totalPages - 1;
  const isBeforeLastEnabled = page < totalPages - 2;
  const isLastDisableEnabled = page < totalPages - 4;

  return (
    <div className="join">
      {isFirstEnabled && (
        <button className="join-item btn btn-sm" onClick={() => setPage(1)}>
          1
        </button>
      )}
      {isSecondEnabled && (
        <button className="join-item btn btn-sm" onClick={() => setPage(2)}>
          2
        </button>
      )}
      {isFirstDisableEnabled && (
        <button className="join-item btn btn-sm btn-primary">...</button>
      )}
      {page > 1 && (
        <button
          className="join-item btn btn-sm"
          onClick={() => setPage(page - 1)}
        >
          {page - 1}
        </button>
      )}
      <button className="join-item btn btn-sm btn-accent">{page}</button>
      {page < totalPages && (
        <button
          className="join-item btn btn-sm"
          onClick={() => setPage(page + 1)}
        >
          {page + 1}
        </button>
      )}
      {isLastDisableEnabled && (
        <button className="join-item btn btn-sm btn-primary">...</button>
      )}
      {isBeforeLastEnabled && (
        <button
          className="join-item btn btn-sm"
          onClick={() => setPage(totalPages - 1)}
        >
          {totalPages - 1}
        </button>
      )}
      {isLastEnabled && (
        <button
          className="join-item btn btn-sm"
          onClick={() => setPage(totalPages)}
        >
          {totalPages}
        </button>
      )}
    </div>
  );
};

export default Pagination;
