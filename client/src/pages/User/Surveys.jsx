import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import CreateSurveyModal from "../../components/CreateSurveyModal";
import CreateSurveyButton from "../../components/CreateSurveyButton";
import { TextField } from "@mui/material";

import useCreateSurveyModalStore from "../../stores/CreateSurveyModalStore";

const Surveys = () => {
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
              <CreateSurveyButton 
                onButtonClick={handleCreateSurveyOpen}
              />
            </div>

            <label className="font-[outfit] font-[700] text-[50px] text-[#3E3C3C] mt-[25px]">
              Surveys
            </label>

            <div className="space-y-6">
              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-2">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    CWD - Survey #1
                  </label>
      
                  <div className="flex items-center">
                    <label className="font-[roboto] font-[600] text-[20px] text-[#0062FE] w-[130px]">
                      5 responses
                    </label>
                  
                    <label className="font-[roboto] font-[500] text-[15px] text-[#57A450] flex items-center justify-center bg-[#EBFAE2] rounded-[10px] py-[3px] px-[15px] ml-[15px]">
                      Active
                    </label>
                  </div>
                </div>
                
                <div className="relative inline-block text-left z-50">
                  <button className="font-[roboto] font-[700] text-[30px] mr-8 flex items-center justify-center mb-2 dropdown-button">
                    ...
                  </button>
                  <div className="absolute right-0 mt-1 w-56 rounded-md bg-white border-[1px] border-#C2BEBE focus:outline-none hidden dropdown-menu">
                    <div className="py-3" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 font-[roboto] font-[400] text-[20px] text-[#565555] hover:bg-[#E5EFFF] hover:font-[600] hover:text-[#0062FE]" role="menuitem">Summary</a>
                      <a href="#" className="block px-4 py-2 font-[roboto] font-[400] text-[20px] text-[#565555] hover:bg-[#E5EFFF] hover:font-[600] hover:text-[#0062FE]" role="menuitem">Edit</a>
                      <a href="#" className="block px-4 py-2 font-[roboto] font-[400] text-[20px] text-[#565555] hover:bg-[#E5EFFF] hover:font-[600] hover:text-[#0062FE]" role="menuitem">Duplicate</a>
                      <a href="#" className="block px-4 py-2 font-[roboto] font-[400] text-[20px] text-[#565555] hover:bg-[#E5EFFF] hover:font-[600] hover:text-[#0062FE]" role="menuitem">Delete</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-2">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    CWD - Survey #2
                  </label>
      
                  <div className="flex items-center">
                    <label className="font-[roboto] font-[600] text-[20px] text-[#0062FE] w-[130px]">
                      21 responses
                    </label>
                  
                    <label className="font-[roboto] font-[500] text-[15px] text-[#ED6A88] flex items-center justify-center bg-[#FDF2F2] rounded-[10px] py-[3px] px-[10px] ml-[15px]">
                      Paused
                    </label>
                  </div>
                </div>

                <button className="font-[roboto] font-[700] text-[30px] mr-8 flex items-center justify-center mb-2">
                  ...
                </button>
              </div>

              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-2">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    CWD - Survey #3
                  </label>
      
                  <div className="flex items-center">
                    <label className="font-[roboto] font-[600] text-[20px] text-[#0062FE] w-[130px]">
                      46 responses
                    </label>
                  
                    <label className="font-[roboto] font-[500] text-[15px] text-[#0084FE] flex items-center justify-center bg-[#E2EEFF] rounded-[10px] py-[3px] px-[10px] ml-[15px]">
                      Completed
                    </label>
                  </div>
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

export default Surveys;
