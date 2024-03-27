import React from "react";
import cylinder from "./cylinder.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
const Card = () => {
  // const card =[
  //     {
  //         planname:"Swift Assit",
  //         planprice:1500
  //     }
  // ]
  return (
    <>
      <h2 className="text-center m-3 opacity-8 text-black-800">
        Plan & Pricing
      </h2>
      <div className="w-full md:flex sm:items-center sm:justify-center  md:mt-2 bg-card-section">
        <div className="md:w-80 md:ml-24 mx-4 py-1 px-1 bg-card1 rounded-md h-568 m-1 items-center justify-center  ">
          <div className="flex-col h-32 py-4 rounded-md bg-card1h">
            <div className="mx-[49%] mb-2 items-center">
              <img className="h-8 w-full  rotate-45" src={cylinder} alt="" />
            </div>
            <div>
              <p className="mx-4 my-2 text-sm">
                this is the card i heeader here i have to put some data which
                coe from backend team
              </p>
            </div>
          </div>
          <div className="flex-row">
            <h3 className="ml-2 text-2xl opacity-6 ">Swift Analysis</h3>

            <p className="ml-2 mt-0 text-green-600 text-xl">1500 </p>
            <p className="ml-2 mt-0 mb-6 text-green-600 text-sm">
              PER ACTIVE USER
            </p>
          </div>
          <div className="flex-row">
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="1 Month Duration" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="4 Session" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="350 Add On" />
            </ListItemButton>
            <ListItemButton sx={{ ":hover": "none" }}>
              <ListItemIcon>
                <CancelIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="Saving %" />
            </ListItemButton>
          </div>
          <div className="w-[100%] mt-3 my-0">
            <button className=" w-[99%] mx-0.5   text-center my-1 rounded-md h-8  bg-green-700">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-80 md:ml-2 mx-4 py-1 px-1 bg-card1 rounded-md h-568 m-1 items-center justify-center  ">
          <div className="flex-col h-32 py-4 rounded-md bg-card1h">
            <div className="mx-[49%] mb-2 items-center">
              <img className="h-8 w-full  rotate-45" src={cylinder} alt="" />
            </div>
            <div>
              <p className="mx-4 my-2 text-sm">
                this is the card i heeader here i have to put some data which
                coe from backend team
              </p>
            </div>
          </div>
          <div className="flex-row">
            <h3 className="ml-2 text-2xl opacity-6 ">Swift Analysis</h3>

            <p className="ml-2 mt-0 text-green-600 text-xl">1500 </p>
            <p className="ml-2 mt-0 mb-6 text-green-600 text-sm">
              PER ACTIVE USER
            </p>
          </div>
          <div className="flex-row">
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="1 Month Duration" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="4 Session" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="350 Add On" />
            </ListItemButton>
            <ListItemButton sx={{ ":hover": "none" }}>
              <ListItemIcon>
                <CancelIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="Saving %" />
            </ListItemButton>
          </div>
          <div className="w-[100%] mt-3 my-0">
            <button className=" w-[99%] mx-0.5   text-center my-1 rounded-md h-8  bg-green-700">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-80 md:ml-2 mx-4 py-1 px-1 bg-card1 rounded-md h-568 m-1 items-center justify-center  ">
          <div className="flex-col h-32 py-4 rounded-md bg-card1h">
            <div className="flex-row mx-[49%] mb-2 items-center">
              <button className="ml-24 border-solid border-2 mt-[-80%] rounded-xl px-2  border-black">
                JULY
              </button>
              <img className="h-8 w-full  rotate-45" src={cylinder} alt="" />
            </div>
            <div>
              <p className="mx-4 my-2 text-sm">
                this is the card i heeader here i have to put some data which
                coe from backend team
              </p>
            </div>
          </div>
          <div className="flex-row">
            <h3 className="ml-2 text-2xl opacity-6 ">Swift Analysis</h3>

            <p className="ml-2 mt-0 text-green-600 text-xl">1500 </p>
            <p className="ml-2 mt-0 mb-6 text-green-600 text-sm">
              PER ACTIVE USER
            </p>
          </div>
          <div className="flex-row">
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="1 Month Duration" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="4 Session" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="350 Add On" />
            </ListItemButton>
            <ListItemButton sx={{ ":hover": "none" }}>
              <ListItemIcon>
                <CancelIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="Saving %" />
            </ListItemButton>
          </div>
          <div className="w-[100%] mt-3 my-0">
            <button className=" w-[99%] mx-0.5   text-center my-1 rounded-md h-8  bg-green-700">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-80 md:ml-2 md:mr-24 mx-4 py-1 px-1 bg-card1 rounded-md h-568 m-1 items-center justify-center  ">
          <div className="flex-col h-32 py-4 rounded-md bg-card1h">
            <div className="mx-[49%] mb-2 items-center">
              <img className="h-8 w-full  rotate-45" src={cylinder} alt="" />
            </div>
            <div>
              <p className="mx-4 my-2 text-sm">
                this is the card i heeader here i have to put some data which
                coe from backend team
              </p>
            </div>
          </div>
          <div className="flex-row">
            <h3 className="ml-2 text-2xl opacity-6 ">Swift Analysis</h3>

            <p className="ml-2 mt-0 text-green-600 text-xl">1500 </p>
            <p className="ml-2 mt-0 mb-6 text-green-600 text-sm">
              PER ACTIVE USER
            </p>
          </div>
          <div className="flex-row">
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="1 Month Duration" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="4 Session" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="350 Add On" />
            </ListItemButton>
            <ListItemButton sx={{ ":hover": "none" }}>
              <ListItemIcon>
                <CancelIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="Saving %" />
            </ListItemButton>
          </div>
          <div className="w-[100%] mt-3 my-0">
            <button className=" w-[99%] mx-0.5   text-center my-1 rounded-md h-8  bg-green-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
