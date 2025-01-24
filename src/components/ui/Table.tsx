export interface ColumnsDataType<T> {
  name: string;
  key: string;
  render: (data: T) => string | JSX.Element;
  comingSoon?: boolean;
}

interface TableProps<T> {
  columnsData?: ColumnsDataType<T>[];
  data?: T[];
}
const Table = <T,>({ columnsData, data }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {columnsData?.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              {columnsData?.map((column, index) => (
                <td key={index}>{column.render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
