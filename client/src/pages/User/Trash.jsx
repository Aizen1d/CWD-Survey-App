import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import CreateSurveyModal from "../../components/CreateSurveyModal";
import CreateSurveyButton from "../../components/CreateSurveyButton";
import { TextField } from "@mui/material";

import useCreateSurveyModalStore from "../../stores/CreateSurveyModalStore";

const Trash = () => {
  const location = useLocation();
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
              <CreateSurveyButton s
                onButtonClick={handleCreateSurveyOpen}
              />
            </div>

            <label className="font-[outfit] font-[700] text-[50px] text-[#3E3C3C] mt-[25px]">
              Trash
            </label>

            <div className="space-y-6">
              <div className="flex items-center w-full h-[83px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col text-center w-full">
                  <label className="text-center font-[roboto] font-[500] text-[20px] text-[#565555]">
                    Surveys that remain in the Trash for more than 30 days will be deleted automatically.
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-2">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    CWD - Survey #1
                  </label>

                  <label className="font-[roboto] font-[500] text-[15px] text-[#3E3C3C] flex items-center justify-center bg-[#BEC2BE] rounded-[10px] w-[102px] h-[27px]">
                    Survey
                  </label>
                </div>

                <div className="relative inline-block text-left z-50">
                  <button className="font-[roboto] font-[700] text-[30px] mr-8 flex items-center justify-center mb-2 dropdown-button">
                    ...
                  </button>
                  <div className="absolute right-0 mt-1 w-56 rounded-md bg-white border-[1px] border-#C2BEBE focus:outline-none hidden dropdown-menu">
                    <div className="py-3" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 font-[roboto] font-[400] text-[20px] text-[#565555] hover:bg-[#E5EFFF] hover:font-[600] hover:text-[#0062FE]" role="menuitem">Recover</a>
                      <a href="#" className="block px-4 py-2 font-[roboto] font-[400] text-[20px] text-[#565555] hover:bg-[#E5EFFF] hover:font-[600] hover:text-[#0062FE]" role="menuitem">Delete</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-2">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    Anonymous #662f8ef3
                  </label>

                  <label className="font-[roboto] font-[500] text-[15px] text-[#3E3C3C] flex items-center justify-center bg-[#BEC2BE] rounded-[10px] w-[102px] h-[27px]">
                    Response
                  </label>
                </div>

                <button className="font-[roboto] font-[700] text-[30px] mr-8 flex items-center justify-center mb-2">
                  ...
                </button>
              </div>

              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-2">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    Product Satisfactory
                  </label>

                  <label className="font-[roboto] font-[500] text-[15px] text-[#3E3C3C] flex items-center justify-center bg-[#BEC2BE] rounded-[10px] w-[102px] h-[27px]">
                    Survey
                  </label>
                </div>

                <button className="font-[roboto] font-[700] text-[30px] mr-8 flex items-center justify-center mb-2">
                  ...
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Trash;
