import axios from "axios";
import React, { useEffect, useState } from "react";

interface App {}

const App = () => {
  const [myData, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setMydata(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <>
      <div>
        <h1>Data</h1>
      </div>
      {myData.map((data) => (
        <p key={data.id}>
          {data.name}, {data.username}
          {data.email}
        </p>
      ))}
    </>
  );
};

export default App;
