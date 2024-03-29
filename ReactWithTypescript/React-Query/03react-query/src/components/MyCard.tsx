import axios from "axios";
import React from "react";

import { useQuery, QueryFunction } from "react-query";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
  };
  geo: {
    lat: string;
    lng: string;
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type FetchDataFunction = QueryFunction<UserData[]>;

const MyCard: React.FC = () => {
  const fetchData: FetchDataFunction = async () => {
    const response = await axios.get<UserData[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery("myData", fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data &&
          data.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div className="w-96 bg-green-300 text-black rounded-lg shadow-md p-4">
                <p className="font-bold">Name: {item.name}</p>
                <p>Username: {item.username} </p>
                <p>Phone: {item.phone}</p>
                <p>Email: {item.email}</p>
                <p>Website: {item.website}</p>
                <address>
                  Address: {item.address.street} {item.address.city}{" "}
                  {item.address.zipcode}
                </address>
                <p>Company Name: {item.company.name}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MyCard;
