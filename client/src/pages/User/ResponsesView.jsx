import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";

const ResponsesView = () => {
  return (
    <>
      <div className="min-h-screen flex bg-[#FBFDFF]">
        <Sidebar />
        <div className="mx-[33px] flex-grow flex flex-col mb-6 w-full">
          <div className="mt-[45px]">
            <button>
              <img src="/icons/Survey/left-arrow.svg" />
            </button>
          </div>

          <label className="font-[outfit] font-[700] text-[50px] text-[#3E3C3C] mt-[15px]">
            Responses
          </label>

          <div className="space-y-6">
            <div className="flex items-center w-full h-[83px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
              <div className="flex flex-col text-center w-full">
                <label className="text-center font-[roboto] font-[700] text-[20px] text-[#565555]">
                  Anonymous #662f8ef3
                </label>

                <label className="text-center font-[roboto] font-[400] text-[20px] text-[#858689]">
                  Finished the CWD - Survey #1 just a minute ago.
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
              <div className="flex flex-col ml-[27px] space-y-1">
                <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                  1. What is the capital of France?
                </label>

                <label className="font-[roboto] font-[400] text-[20px] text-[#858689]">
                  Response: Quezon City
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
              <div className="flex flex-col ml-[27px] space-y-1">
                <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                  2. Who wrote "To Kill a Mockingbird"?
                </label>

                <label className="font-[roboto] font-[400] text-[20px] text-[#858689]">
                  Response: Harry Potter
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
              <div className="flex flex-col ml-[27px] space-y-1">
                <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                  3. Is the Earth flat?
                </label>

                <label className="font-[roboto] font-[400] text-[20px] text-[#858689]">
                  Response: True
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
              <div className="flex flex-col ml-[27px] space-y-1">
                <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                  4. Which of these are musical instruments?
                </label>

                <label className="font-[roboto] font-[400] text-[20px] text-[#858689]">
                  Response: Bicycle, Drum
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsesView;
