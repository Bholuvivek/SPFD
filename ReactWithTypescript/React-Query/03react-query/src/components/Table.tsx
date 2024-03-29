import axios from "axios";
import { useState } from "react";
import { QueryFunction, useQuery } from "react-query";

interface tableData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type FetchDataFunction = QueryFunction<tableData[]>;
const Table: React.FC = () => {
  const fetchData: FetchDataFunction = async () => {
    const response = await axios.get<tableData[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery("data", fetchData);

  if (isLoading) return <div>Loading........</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse m-5  w-full">
          <thead className=" bg-red-300">
            <tr>
              <th className="border p-2">User ID</th>
              <th className="border p-2">ID</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, i) => (
              <tr key={i}>
                <td className="border p-2">{item.userId}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= data.length}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
