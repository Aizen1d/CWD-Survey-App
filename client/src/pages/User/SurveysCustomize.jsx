import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";

const SurveysCustomize = () => {
  return (
    <>
      <div className="min-h-screen bg-[#FBFDFF]">
        <Sidebar />

        <div className="flex flex-col">
          <div className="flex flex-col sticky top-0 z-10">
            <div className="flex h-[80px] bg-white border-b-[1px] border-[#C7C7C7] items-center px-7 justify-between">
              <label className="font-[outfit] font-[400] text-[30px] text-[#3E3C3C]">
                Survey Name
              </label>

              <div className="flex space-x-4">
                <div className="flex items-center">
                  <button>
                    <img src="/icons/Survey/undo.svg" className="h-[29px]" />
                  </button>
                  <button>
                    <img src="/icons/Survey/redo.svg" className="h-[29px]" />
                  </button>
                </div>

                <button className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C] h-[46px] w-[135px] border-2 border-[#525252] rounded-[10px]">
                  Save Draft
                </button>

                <button className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C] h-[46px] w-[135px] border-2 border-[#525252] rounded-[10px]">
                  Discard
                </button>

                <button className="font-[roboto] font-[500] text-[20px] text-white h-[46px] bg-[#0062FE] w-[135px] rounded-[10px]">
                  Publish
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="flex w-[55%]">
                <div className="flex items-end h-[55px] w-full bg-white border-b-[1px] border-r-[1px] border-[#C7C7C7] px-[80px] justify-between">
                  <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-white">
                    Questions
                  </button>

                  <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-[#0062FE]">
                    Customize
                  </button>

                  <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-white">
                    Generate Link
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-[45%]">
                <div className="flex items-end h-[55px] w-full bg-white border-b-[1px] border-[#C7C7C7] px-[80px] justify-center">
                  <label className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-[#0062FE]">
                    Question Preview
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full h-[calc(100vh-135px)]">
            <div className="flex flex-col w-[55%]">
              <div className="flex flex-col bg-white border-b-[1px] border-r-[1px] border-[#C7C7C7] py-6 overflow-y-auto ">
                <div className="flex flex-col bg-white border-[1px] border-[#C7C7C7] rounded-[10px] mx-6 py-6 px-7 h-screen">
                  <div className="flex items-center justify-between w-full">
                    <label className="font-[outfit] font-[600] text-[23px] text-[#3E3C3C]">
                      Customize Theme
                    </label>
                    <button className="mb-[12px] font-[outfit] font-[700] text-[30px] text-[#3E3C3C]">
                      ...
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2 w-full">
                    <div className="flex flex-col space-y-2">
                      <label className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C]">
                        Fonts
                      </label>
                      <label className="font-[roboto] font-[400] text-[20px] text-[#3E3C3C]">
                        Text
                      </label>

                      <div className="flex space-x-5">
                        <input
                          type="text"
                          className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                          placeholder="Font"
                        />

                        <input
                          type="text"
                          className="h-[59px] w-[97px] bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                          placeholder="12"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C]">
                        Images
                      </label>

                      <div className="flex space-x-5">
                        <div className="flex flex-col w-[45%] space-y-2">
                          <label className="font-[roboto] font-[400] text-[20px] text-[#3E3C3C]">
                            Logo
                          </label>
                          <button className="flex flex-shrink-0 h-[59px] w-full items-center justify-center border-[0.5px] border-[#0062FE] rounded-[10px] font-[roboto] font-[600] text-[20px] text-[#1473E0]">
                            <img
                              src="/icons/Survey/image.svg"
                              className="w-[33px] h-[27px] mr-5 ml-[-30px]"
                            />
                            Upload Logo
                          </button>
                        </div>
                        <div className="flex flex-col w-[55%] space-y-2">
                          <label className="font-[roboto] font-[400] text-[20px] text-[#3E3C3C]">
                            Background
                          </label>
                          <button className="flex flex-shrink-0 h-[59px] w-full items-center justify-center border-[0.5px] border-[#0062FE] rounded-[10px] font-[roboto] font-[600] text-[20px] text-[#1473E0]">
                            <img
                              src="/icons/Survey/image.svg"
                              className="w-[33px] h-[27px] mr-5 ml-[-30px]"
                            />
                            Upload Background
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C]">
                        Color
                      </label>
                    </div>

                    <label className="font-[roboto] font-[500] text-[20px] text-[#3E3C3C]">
                      Closing message
                    </label>
                    <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                      Message
                    </label>
                    <textarea
                      type="text"
                      className="h-[89px] w-full py-5 bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px] resize-none"
                      placeholder="Type message..."
                    ></textarea>
                  </div>

                  <div className="mt-5">
                    <button className="flex-shrink-0 font-[roboto] font-[700] text-[20px] text-white h-[46px] w-[135px] bg-[#0062FE] rounded-[10px]">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[45%] overflow-y-auto py-6">
              <div className="flex flex-shrink-0 h-[100px] w-full bg-[#0062FE] items-center justify-center relative px-6 mb-6">
                <button className="absolute left-[80px]">
                  <img src="/icons/Survey/insert-logo.svg" />
                </button>

                <div className="flex flex-col items-center justify-center">
                  <label className="font-[roboto] font-[700] text-[30px] text-white mb-[-7px]">
                    Survey Name
                  </label>

                  <label className="font-[roboto] font-[300] text-[20px] text-white">
                    Survey Description
                  </label>
                </div>
              </div>

              <div className="flex flex-col bg-white border-[1px] border-[#C7C7C7] rounded-[10px] mx-6 py-5 px-7 mb-6 space-y-5">
                <div className="flex flex-col space-y-2">
                  <label className="font-[outfit] font-[600] text-[23px] text-[#3E3C3C] mb-2">
                    Questions
                  </label>

                  <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                    1. What is the capital of France?
                  </label>
                  <textarea
                    type="text"
                    className="h-[109px] w-full py-5 bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px] resize-none"
                    placeholder="Type your answer here"
                    readonly
                  ></textarea>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                    2. Is the Earth flat?
                  </label>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <input type="radio" className="w-5 h-7" disabled />
                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161] ml-2">
                        True
                      </label>
                    </div>
                    <div className="flex">
                      <input type="radio" className="w-5 h-7" disabled />
                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161] ml-2">
                        False
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                    3. Which of these are musical instruments?
                  </label>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="w-5 h-7" disabled />
                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161] ml-2">
                        Guitar
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="w-5 h-7" disabled />
                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161] ml-2">
                        Bicycle
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="w-5 h-7" disabled />
                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161] ml-2">
                        Drum
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col pt-5 space-y-3">
                  <button
                    className="font-[roboto] font-[500] text-[20px] text-white h-[46px] bg-[#0062FE] w-[135px] rounded-[10px]"
                    disabled
                  >
                    Submit
                  </button>
                  <div className="flex">
                    <input type="checkbox" className="w-5 h-7" disabled />
                    <label className="font-[roboto] font-[400] text-[20px] text-[#616161] ml-2">
                      Send me a copy of my responses
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveysCustomize;
