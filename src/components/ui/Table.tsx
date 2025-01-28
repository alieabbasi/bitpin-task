import { Ghost } from "iconsax-react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";

export interface ColumnsDataType<T> {
  name: string;
  key: string;
  render: (data: T) => string | JSX.Element;
  className?: string;
  href?: (data: T) => string;
}

interface TableProps<T> {
  isLoading?: boolean;
  title: string;
  columnsData: ColumnsDataType<T>[];
  data: T[];
}

const Table = <T,>({ title, columnsData, data, isLoading }: TableProps<T>) => {
  const navigate = useNavigate();
  const location = useLocation();
  const titleSuffix = title.endsWith("ی")
    ? ""
    : title.endsWith("ه")
    ? "‌ای"
    : "ی";

  return (
    <>
      {isLoading ? (
        <Loading info="در حال بارگزاری داده‌ها" dynamic />
      ) : data?.length === 0 ? (
        <div className="w-full h-full min-h-[50vh] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <Ghost size="32" className="text-amber-600" />
            <span className="text-lg mr-4">
              هیچ {title + titleSuffix} پیدا نشد :(
            </span>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                {columnsData?.map((column, index) => (
                  <th
                    key={index}
                    className={column.className + " px-1 sm:px-2 md:px-4"}
                  >
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr
                  key={index}
                  className={
                    columnsData?.[0].href
                      ? "hover duration-150 cursor-pointer"
                      : ""
                  }
                  onClick={() =>
                    columnsData?.[0].href
                      ? navigate(columnsData?.[0].href(item), {
                          state: { location: location.pathname },
                        })
                      : null
                  }
                >
                  {columnsData?.map((column, index) => (
                    <td
                      key={index}
                      className={column.className + " px-1 sm:px-2 md:px-4"}
                    >
                      {column.render(item)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
