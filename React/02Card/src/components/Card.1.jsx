import React from "react";
import cylinder from "./cylinder.png";
import cancel from "./cancel.png";

export const Card = () => {
  // const card =[
  //     {
  //         planname:"Swift Assit",
  //         planprice:1500
  //     }
  // ]
  return (
    <>
      {" "}
      <h2>Price</h2>
      <div className="w-full md:flex md:mt-2 bg-card-section">
        <div className="w-80 md:ml-24 bg-card1 rounded-md h-568 m-1  ">
          <div className="flex-col h-32 pt-0 w- mx-1 my-1 rounded-md bg-card1h">
            {" "}
            <img
              className="h-8 w-8 ml-12  items-center rotate-45"
              src={cylinder}
              alt=""
            />
            <p className="mx-4">
              this is the card i heeader here i have to put som data
            </p>
          </div>
          <div className="flex-row">
            <h3 className="ml-2 text-2xl">Plan 1</h3>

            <h2 className="ml-2 text-green-600">
              1500 <br />{" "}
              <span className="text-green-600 text-start ">
                PER ACTIVE USER
              </span>
            </h2>
          </div>
          <div className="flex">
            <ul>
              <li className="list-image-[url(check.png)">1</li>
              <li>
                <img src={check} alt="" /> 1
              </li>
              <li>
                <img src={check} alt="" /> 1
              </li>
              <li>
                <img src={cancel} alt="" /> 1
              </li>
            </ul>
          </div>
          <div>buttom</div>
        </div>
        <div className="w-80 md:ml-2 bg-card1 rounded-md h-568 m-1 flex-shrink-0">
          <div className="h-20 pt-0 w-23 mx-1 my-1 rounded-md bg-card1h">
            {" "}
            <img
              className="h-8 w-8 ml-40  items-center rotate-45"
              src={cylinder}
              alt=""
            />
            <p className="mx-4">
              this is the card i heeader here i have to put som data
            </p>
          </div>
          <div>
            <h3>Plan 1</h3>
            <h2>
              1500 <span className="text-4">PER ACTIVE USER</span>
            </h2>
          </div>
          <div>buttom</div>
        </div>
        <div className="w-80 md:ml-2 bg-card1 rounded-md h-568 m-1 flex-shrink-0">
          <div className="h-20 pt-0 w-23 mx-1 my-1 rounded-md bg-card1h">
            {" "}
            <img
              className="h-8 w-8 ml-40  items-center rotate-45"
              src={cylinder}
              alt=""
            />
            <p className="mx-4">
              this is the card i heeader here i have to put som data
            </p>
          </div>
          <div>
            <h3>Plan 1</h3>
            <h2>
              1500 <span className="text-4">PER ACTIVE USER</span>
            </h2>
          </div>
          <div>buttom</div>
        </div>

        <div className="w-80 md:ml-2 md:mr-24 bg-card1 rounded-md h-568 m-1 flex-shrink-0">
          <div className="h-20 pt-0 w-23 mx-1 my-1 rounded-md bg-card1h">
            {" "}
            <img
              className="h-8 w-8 ml-40  items-center rotate-45"
              src={cylinder}
              alt=""
            />
            <p className="mx-4">
              this is the card i heeader here i have to put som data
            </p>
          </div>
          <div>
            <h3>Plan 1</h3>
            <h2>
              1500 <span className="text-4">PER ACTIVE USER</span>
            </h2>
          </div>
          <div>buttom</div>
        </div>
      </div>
    </>
  );
};
