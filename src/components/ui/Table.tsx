import { useNavigate } from "react-router-dom";

export interface ColumnsDataType<T> {
  name: string;
  key: string;
  render: (data: T) => string | JSX.Element;
  className?: string;
  href?: (data: T) => string;
}

interface TableProps<T> {
  columnsData?: ColumnsDataType<T>[];
  data?: T[];
}

const Table = <T,>({ columnsData, data }: TableProps<T>) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {columnsData?.map((column, index) => (
              <th key={index} className={column.className + " px-1 sm:px-2 md:px-4"}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index}
              className={columnsData?.[0].href ? "hover duration-150 cursor-pointer" : ""}
              onClick={() =>
                columnsData?.[0].href
                  ? navigate(columnsData?.[0].href(item))
                  : null
              }
            >
              {columnsData?.map((column, index) => (
                <td key={index} className={column.className + " px-1 sm:px-2 md:px-4"}>
                  {column.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
