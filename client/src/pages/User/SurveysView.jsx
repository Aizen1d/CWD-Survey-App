import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";

const SurveysView = () => {
  return (
    <>
      <div className="min-h-screen bg-[#FBFDFF]">
        <Sidebar />
        <div className="flex flex-col">
          <div className="flex flex-col sticky top-0 z-10 mb-6">
            <div className="flex h-[124px] bg-white border-b-[1px] border-[#C7C7C7] items-center px-[50px] justify-between">
              <div className="flex">
                <button>
                  <img src="/icons/Survey/left-arrow.svg" />
                </button>
                <div className="flex flex-col space-y-2 ml-10">
                  <div className="flex">
                    <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                      CWD - Survey #1
                    </label>
                    <label className="font-[roboto] font-[500] text-[15px] text-[#57A450] flex items-center justify-center bg-[#EBFAE2] rounded-[10px] py-[3px] px-[15px] ml-[20px]">
                      Active
                    </label>
                  </div>

                  <label className="font-[roboto] font-[500] text-[20px] text-[#858689]">
                    Published March 25th, 2024
                  </label>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C] h-[46px] w-[135px] border-[2px] border-[#525252] rounded-[10px]">
                  Duplicate
                </button>
                <button className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C] h-[46px] w-[135px] border-[2px] border-[#525252] rounded-[10px]">
                  Edit
                </button>
                <button className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C] h-[46px] w-[162px] border-[2px] border-[#525252] rounded-[10px]">
                  Running
                </button>
              </div>
            </div>
            <div className="flex w-full bg-white border-b-[1px] border-r-[1px] border-[#C7C7C7]">
              <div className="flex items-end h-[56px] w-[55%] px-[100px] justify-between">
                <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-[#0062FE]">
                  Summary
                </button>

                <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-white">
                  Responses
                </button>

                <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-white">
                  Questions
                </button>
              </div>
              <div className="flex items-end w-[45%] justify-end pr-[50px]">
                <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-white">
                  Download PDF
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col px-[50px]">
            <div className="flex flex-col bg-white border-[1px] border-[#C7C7C7] rounded-[10px] py-6 px-8 space-y-5">
              <div className="flex justify-between">
                <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                  1. What is the capital of France?
                </label>
                <label className="font-[roboto] font-[500] text-[20px] text-[#858689]">
                  2 Responses
                </label>
              </div>

              <div className="flex flex-col ml-5">
                <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                  Anonymous #662f8ef3
                </label>
                <label className="font-[roboto] font-[500] text-[20px] text-[#858689]">
                  One respondent replied with 'Batangas'.
                </label>
              </div>

              <div className="flex flex-col ml-5">
                <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                  Lead Lougen
                </label>
                <label className="font-[roboto] font-[500] text-[20px] text-[#858689]">
                  One respondent replied with 'Quezon City'.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveysView;
