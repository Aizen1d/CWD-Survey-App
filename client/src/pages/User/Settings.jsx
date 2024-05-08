import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import dayjs from 'dayjs'
import 'react-phone-input-2/lib/material.css'

import Sidebar from "../../components/Sidebar";
import { TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PhoneInput from 'react-phone-input-2'

import useCreateSurveyModalStore from "../../stores/CreateSurveyModalStore";

const Settings = () => {
  const location = useLocation();
  const handleCreateSurveyOpen = useCreateSurveyModalStore((state) => state.open);

  useEffect(() => {
    toast.dismiss();
  }, [location]);

  return (
    <>
      <div className="min-h-screen">
        <Sidebar />

        <div className="mx-auto bg-[#FBFDFF] flex min-h-screen">
          <div className="mx-[33px] flex flex-col mb-6 w-full">
            <label className="font-[outfit] font-[700] text-[50px] text-[#3E3C3C] mt-[100px]">
              Settings
            </label>

            <div className="flex items-center h-[180px] w-full rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#565555] justify-between">
              <img src="/icons/Sidebar/user.svg" className="w-[173px] h-[173px] mx-[30px]"></img>

              <div className="flex flex-col ml-[20px] w-[480px] mr-[20px]">
                <label className="font-[roboto] font-[700] text-[40px] text-[#3E3C3C] mb-[-10px] mt-[-10px]">
                  John Doe
                </label>

                <label className="font-[roboto] font-[300] text-[25px] text-[#3E3C3C]">
                  johndoe@gmail.com
                </label>

                <button className="font-[roboto] font-[400] text-[25px] text-[#0062FE] text-left underline decoration-solid">
                  Change email
                </button>
              </div>

              <div className="flex w-[385px] justify-between mr-10">
                <button className="font-[roboto] font-[700] text-[20px] text-white bg-[#0062FE] rounded-[10px] w-[182px] h-[52px]">
                  Update Photo
                </button>

                <button className="font-[roboto] font-[700] text-[20px] text-[#3E3C3C] bg-white rounded-[10px] w-[182px] h-[52px] outline outline-1">
                  Remove Photo
                </button>
              </div>
            </div>

            <hr className="border-[#C0BBBB] mt-4" />

            <div className="flex flex-col mt-4">
              <label className="font-[outfit] font-[500] text-[30px] text-[#3E3C3C] mb-2">
                Edit Profile
              </label>

              <div className="flex flex-col space-y-2">
                <label className="font-[roboto] font-[400] text-[20px] text-[#3E3D3D]">
                  Name
                </label>
                <input type="text" className="h-[59px] w-full bg-white rounded-[10px] outline outline-1 outline-[#565555] px-5 font-[roboto] text-[20px]" placeholder="John Doe" />

                <div className="grid grid-row-2 grid-cols-2 gap-6 gap-y-2">
                  <div className="space-y-2">
                    <label className="font-[roboto] font-[400] text-[20px] text-[#3E3D3D]">
                      Birthday
                    </label>
                    <input type="text" className="h-[59px] w-full bg-white rounded-[10px] outline outline-1 outline-[#565555] px-5 font-[roboto] text-[20px]" placeholder="August 31, 2001" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-[roboto] font-[400] text-[20px] text-[#3E3D3D]">
                      Number
                    </label>
                    <input type="text" className="h-[59px] w-full bg-white rounded-[10px] outline outline-1 outline-[#565555] px-5 font-[roboto] text-[20px]" placeholder="09337864501" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-[roboto] font-[400] text-[20px] text-[#3E3D3D]">
                      Gender
                    </label>
                    <input type="text" className="h-[59px] w-full bg-white rounded-[10px] outline outline-1 outline-[#565555] px-5 font-[roboto] text-[20px]" placeholder="Male" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-[roboto] font-[400] text-[20px] text-[#3E3D3D]">
                      Address
                    </label>
                    <input type="text" className="h-[59px] w-full bg-white rounded-[10px] outline outline-1 outline-[#565555] px-5 font-[roboto] text-[20px]" placeholder="Quezon City, Metro Manila" />
                  </div>
                </div>
              </div>

              <label className="font-[outfit] font-[500] text-[30px] text-[#3E3C3C] mb-2 mt-2">
                Change Password
              </label>

              <div className="flex flex-col space-y-2">
                <label className="font-[roboto] font-[400] text-[20px] text-[#3E3D3D]">
                  Old Password
                </label>
                <input type="text" className="h-[59px] w-full bg-white rounded-[10px] outline outline-1 outline-[#565555] px-5 font-[roboto] text-[20px]" placeholder="• • • • • • •" />

                <label className="font-[roboto] font-[400] text-[20px] text-[#3E3D3D]">
                  New Password
                </label>
                <input type="text" className="h-[59px] w-full bg-white rounded-[10px] outline outline-1 outline-[#565555] px-5 font-[roboto] text-[20px]" placeholder="• • • • • • •" />

                <label className="font-[roboto] font-[400] text-[20px] text-[#3E3D3D]">
                  Confirm Password
                </label>
                <input type="text" className="h-[59px] w-full bg-white rounded-[10px] outline outline-1 outline-[#565555] px-5 font-[roboto] text-[20px]" placeholder="• • • • • • •" />
              </div>

              <button className="w-[265px] h-[52px] bg-[#0062FE] rounded-[10px] font-[roboto] font-[700] text-[20px] text-white text-center mt-5 ml-auto">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
