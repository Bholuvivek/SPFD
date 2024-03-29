import Card from "./components/MyCard";
import { QueryClient, QueryClientProvider } from "react-query"; // Removed useQuery import
import Table from "./components/Table";

function App() {
  console.log("hello");
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <Card />
        <Table />
      </QueryClientProvider>
    </>
  );
}

export default App;
