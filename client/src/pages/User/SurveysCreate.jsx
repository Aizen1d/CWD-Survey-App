import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";

const SurveysCreate = () => {
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
                  <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-[#0062FE]">
                    Questions
                  </button>

                  <button className="font-[outfit] font-[600] text-[25px] text-[#3E3C3C] border-b-[7px] border-white">
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

                <div className="flex  flex-col space-y-6">
                  <div className="flex flex-col bg-white border-[1px] border-[#C7C7C7] rounded-[10px] mx-6 py-5 px-7">
                    <div className="flex items-center justify-between w-full">
                      <label className="font-[outfit] font-[600] text-[23px] text-[#3E3C3C]">
                        Question #1
                      </label>
                      <button className="mb-[12px] font-[outfit] font-[700] text-[30px] text-[#3E3C3C]">
                        ...
                      </button>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                        Question
                      </label>
                      <input
                        type="text"
                        className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                        placeholder="Input question"
                      />

                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                        Description
                        <span className="text-[#B14B4B]">*optional</span>
                      </label>
                      <textarea
                        type="text"
                        className="h-[109px] w-full py-5 bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px] resize-none"
                        placeholder="Add description"
                      ></textarea>

                      <div className="flex w-full space-x-7">
                        <div className="flex flex-col w-full space-y-2">
                          <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                            Answer Type
                          </label>
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Choose an answer type"
                          />
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                          <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                            Required or not?
                          </label>
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="No"
                          />
                        </div>
                      </div>

                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                        Input Placeholder
                      </label>
                      <textarea
                        type="text"
                        className="h-[109px] w-full py-5 bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px] resize-none"
                        placeholder="Type your answer here"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex flex-col bg-white border-[1px] border-[#C7C7C7] rounded-[10px] mx-6 py-5 px-7">
                    <div className="flex items-center justify-between w-full">
                      <label className="font-[outfit] font-[600] text-[23px] text-[#3E3C3C]">
                        Question #2
                      </label>
                      <button className="mb-[12px] font-[outfit] font-[700] text-[30px] text-[#3E3C3C]">
                        ...
                      </button>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                        Question
                      </label>
                      <input
                        type="text"
                        className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                        placeholder="Input question"
                      />

                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                        Description
                        <span className="text-[#B14B4B]">*optional</span>
                      </label>
                      <textarea
                        type="text"
                        className="h-[109px] w-full py-5 bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px] resize-none"
                        placeholder="Add description"
                      ></textarea>

                      <div className="flex w-full space-x-7">
                        <div className="flex flex-col w-full space-y-2">
                          <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                            Answer Type
                          </label>
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Multiple choice"
                          />
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                          <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                            Required or not?
                          </label>
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Yes"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col space-y-4 pt-3">
                        <label className="font-[roboto] font-[600] text-[20px] text-[#3E3C3C]">
                          Options
                        </label>

                        <div className="flex space-x-5">
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Option 1"
                          />

                          <button>
                            <img src="/icons/Survey/option.svg" className="w-[30px]" />
                          </button>

                          <button>
                            <img src="/icons/Survey/trash.svg" className="w-[36px]" />
                          </button>
                        </div>

                        <div className="flex space-x-5">
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Option 2"
                          />

                          <button>
                            <img src="/icons/Survey/option.svg" className="w-[30px]" />
                          </button>

                          <button>
                            <img src="/icons/Survey/trash.svg" className="w-[36px]" />
                          </button>
                        </div>

                        <button className="font-[roboto] font-[400] text-[20px] text-[#616161] h-[45px] w-[141px] rounded-[10px] outline outline-[0.5px] outline-[#565555]">
                          Add Option
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col bg-white border-[1px] border-[#C7C7C7] rounded-[10px] mx-6 py-5 px-7">
                    <div className="flex items-center justify-between w-full">
                      <label className="font-[outfit] font-[600] text-[23px] text-[#3E3C3C]">
                        Question #3
                      </label>
                      <button className="mb-[12px] font-[outfit] font-[700] text-[30px] text-[#3E3C3C]">
                        ...
                      </button>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                        Question
                      </label>
                      <input
                        type="text"
                        className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                        placeholder="Input question"
                      />

                      <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                        Description
                        <span className="text-[#B14B4B]">*optional</span>
                      </label>
                      <textarea
                        type="text"
                        className="h-[109px] w-full py-5 bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px] resize-none"
                        placeholder="Add description"
                      ></textarea>

                      <div className="flex w-full space-x-7">
                        <div className="flex flex-col w-full space-y-2">
                          <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                            Answer Type
                          </label>
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Checkboxes"
                          />
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                          <label className="font-[roboto] font-[400] text-[20px] text-[#616161]">
                            Required or not?
                          </label>
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Yes"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col space-y-4 pt-3">
                        <label className="font-[roboto] font-[600] text-[20px] text-[#3E3C3C]">
                          Options
                        </label>

                        <div className="flex space-x-5">
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Option 1"
                          />

                          <button>
                            <img src="/icons/Survey/option.svg" className="w-[30px]" />
                          </button>

                          <button>
                            <img src="/icons/Survey/trash.svg" className="w-[36px]" />
                          </button>
                        </div>

                        <div className="flex space-x-5">
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Option 2"
                          />

                          <button>
                            <img src="/icons/Survey/option.svg" className="w-[30px]" />
                          </button>

                          <button>
                            <img src="/icons/Survey/trash.svg" className="w-[36px]" />
                          </button>
                        </div>

                        <div className="flex space-x-5">
                          <input
                            type="text"
                            className="h-[59px] w-full bg-white rounded-[10px] outline outline-[0.5px] outline-[#565555] px-5 font-[roboto] text-[20px]"
                            placeholder="Option 3"
                          />

                          <button>
                            <img src="/icons/Survey/option.svg" className="w-[30px]" />
                          </button>

                          <button>
                            <img src="/icons/Survey/trash.svg" className="w-[36px]" />
                          </button>
                        </div>

                        <button className="font-[roboto] font-[400] text-[20px] text-[#616161] h-[45px] w-[141px] rounded-[10px] outline outline-[0.5px] outline-[#565555]">
                          Add Option
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="flex-shrink-0 font-[roboto] font-[700] text-[20px] text-white h-[59px] bg-[#0062FE] rounded-[10px] mx-6 my-5">
                  + Add another question
                </button>

                <button className="flex-shrink-0 font-[roboto] font-[700] text-[20px] text-white h-[46px] w-[135px] bg-[#0062FE] rounded-[10px] mx-6 ml-auto">
                  Save
                </button>
              </div>
            </div>

            <div className="flex flex-col w-[45%] overflow-y-auto">
              <div className="flex flex-col items-center justify-center">
                <label className="font-[roboto] font-[400] text-[20px] text-[#616161] my-7 mx-6 p">
                  To view a live preview, kindly add questions.
                </label>
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
                    readOnly
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

export default SurveysCreate;
