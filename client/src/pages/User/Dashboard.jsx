import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import CreateSurveyModal from "../../components/CreateSurveyModal";
import CreateSurveyButton from "../../components/CreateSurveyButton";
import { TextField } from "@mui/material";

import useCreateSurveyModalStore from "../../stores/CreateSurveyModalStore";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleCreateSurveyOpen = useCreateSurveyModalStore((state) => state.open);

  useEffect(() => {
    toast.dismiss();
  }, [location]);

  return (
    <>
    <div className="min-h-screen">
      <Sidebar />
      <CreateSurveyModal />

      <div className="mx-auto bg-[#FBFDFF] flex min-h-screen">
        <div className="mx-[33px] flex-grow flex flex-col mb-6">
          <div className="mt-[40px]">
            <CreateSurveyButton 
              onButtonClick={handleCreateSurveyOpen}
            />
          </div>

          <label className="font-[outfit] font-[700] text-[50px] text-[#3E3C3C] mt-[25px]">
            Dashboard
          </label>

          <div className="flex justify-between items-center w-full h-[200px] bg-[#067BEA] rounded-[10px] drop-shadow-lg mt-4">
            <div className="flex flex-col ml-[50px]">
              <label className="font-[roboto] font-[700] text-[40px] text-white">
                Hello [name],
              </label>

              <label className="font-[roboto] font-[300] text-[25px] text-white">
                This is what we’ve got for you today.
              </label>
            </div>

            <div className="md:inline hidden lg:mt-[-50px] lg:mr-[-10px]">
              <img src="/images/Dashboard/hoomans.svg" alt="hoomans" className="md:w-[400px]"></img>
            </div>
          </div>

          <hr className="border-[#C0BBBB] mt-4"></hr>

          <div className="flex justify-between mt-4 items-center">
            <label
              for="analytics"
              className="font-[outfit] font-[500] text-[30px] text-[#3E3C3C]"
            >
              Analytics
            </label>

            <div className="mr-4">
              <button className="font-[outfit] font-[500] text-[20px] text-[#3E3C3C] flex items-center">
                See all (#)
                <img src="/icons/Dashboard/arrow.svg" className="w-4 ml-2"></img>
              </button>
            </div>
          </div>

          <div className="flex items-center grid-cols-2 gap-7 mt-4">
            <div className="flex items-center bg-[#0062FE] w-full h-[110px] rounded-[10px] border-[#C7C7C775] border-[1px] drop-shadow-lg">
              <div className="flex items-center justify-center ml-3 bg-[#0344AC] w-[81px] h-[86px] rounded-[8px] drop-shadow-md">
                <img
                  src="/images/Dashboard/surveys-created.svg"
                  className="w-[77px] h-[77px] mb-1"
                ></img>
              </div>

              <div className="flex flex-col ml-4 justify-center">
                <label className="font-[roboto] font-[500] text-[20px] text-white mb-[-10px]">
                  Surveys Created
                </label>

                <label className="font-[roboto] font-[700] text-[50px] text-white mb-[-10px]">
                  21
                </label>
              </div>

              <label className="text-white flex ml-auto self-end mr-5 mb-4"></label>
            </div>

            <div className="flex items-center bg-[#0062FE] w-full h-[110px] rounded-[10px] border-[#C7C7C775] border-[1px] drop-shadow-lg">
              <div className="flex items-center justify-center ml-3 bg-[#0344AC] w-[81px] h-[86px] rounded-[8px] drop-shadow-md">
                <img src="/images/Dashboard/responses-1.svg" className="w-[59px] h-[49px]"></img>
              </div>

              <div className="flex flex-col ml-4 justify-center">
                <label className="font-[roboto] font-[500] text-[20px] text-white mb-[-10px]">
                  Responses
                </label>

                <label className="font-[roboto] font-[700] text-[50px] text-white mb-[-10px]">
                  123
                </label>
              </div>

              <label className="text-white flex ml-auto self-end mr-5 mb-4"></label>
            </div>
          </div>

          <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-y-6 gap-x-8 mt-7 mb-6">
            <div className="col-span-1 bg-white rounded-[20px] drop-shadow-lg">
              <label className="font-[roboto] font-[500] text-[#3E3C3C] text-[20px]">
                Gender
              </label>
            </div>
            <div className="col-span-1 bg-white rounded-[20px] drop-shadow-lg">
              <label className="font-[roboto] font-[500] text-[#3E3C3C] text-[20px]">
                Location
              </label>
            </div>
            <div className="row-span-2 bg-white rounded-[20px] drop-shadow-lg h-[421px]">
              <label className="font-[roboto] font-[500] text-[#3E3C3C] text-[20px]">
                Age
              </label>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
