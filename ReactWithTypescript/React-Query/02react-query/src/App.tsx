import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

function MyComponent() {
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery("myData", fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && data.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="pp">
        <h1></h1>
        <MyComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
