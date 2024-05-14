import { useEffect, useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import CreateSurveyModal from "../../components/CreateSurveyModal";
import CreateSurveyButton from "../../components/CreateSurveyButton";
import { TextField, Menu, MenuItem } from "@mui/material";

import useCreateSurveyModalStore from "../../stores/CreateSurveyModalStore";

const Responses = () => {
  const location = useLocation();
  const handleCreateSurveyOpen = useCreateSurveyModalStore((state) => state.open);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              Responses
            </label>

            <div className="space-y-6">
              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-1">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    Anonymous #662f8ef3
                  </label>

                  <label className="font-[roboto] font-[400] text-[20px] text-[#858689]">
                    Finished the CWD - Survey #1 just a minute ago.
                  </label>
                </div>

                <div className="relative inline-block text-left z-50">
                  <button
                    onClick={handleClick}
                    id="basic-button"
                    className="font-[roboto] font-[700] text-[30px] mr-8 flex items-center justify-center mb-2 dropdown-button">
                    ...
                  </button>
                  <Menu
                    id="dropdown-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                      className: "absolute right-0 mt-1 w-56 rounded-[10px] bg-white border-[1px] border-#C2BEBE focus:outline-none"
                    }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      className="font-[roboto] font-[400] text-[20px] hover:font-[600] hover:text-[#0062FE]"
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#E5EFFF'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                      
                    >
                      View
                    </MenuItem>
 
                    <MenuItem
                      onClick={handleClose}
                      className="font-[roboto] font-[400] text-[20px] hover:font-[600] hover:text-[#0062FE]"
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#E5EFFF'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                    >
                      Delete
                    </MenuItem>
                  </Menu>


                  <div className="absolute right-0 mt-1 w-56 rounded-md bg-white border-[1px] border-#C2BEBE focus:outline-none hidden dropdown-menu">
                    <div className="py-3" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 font-[roboto] font-[400] text-[20px] text-[#565555] hover:bg-[#E5EFFF] hover:font-[600] hover:text-[#0062FE]" role="menuitem">View</a>
                      <a href="#" className="block px-4 py-2 font-[roboto] font-[400] text-[20px] text-[#565555] hover:bg-[#E5EFFF] hover:font-[600] hover:text-[#0062FE]" role="menuitem">Delete</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-1">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    Lead Lougen
                  </label>

                  <label className="font-[roboto] font-[400] text-[20px] text-[#858689]">
                    Finished the Product Satisfactory 2 days ago.
                  </label>
                </div>

                <button className="font-[roboto] font-[700] text-[30px] mr-8 flex items-center justify-center mb-2">
                  ...
                </button>
              </div>

              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-1">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    PM Joan
                  </label>

                  <label className="font-[roboto] font-[400] text-[20px] text-[#858689]">
                    Finished the CWD - Survey #1 28 minutes ago.
                  </label>
                </div>

                <button className="font-[roboto] font-[700] text-[30px] mr-8 flex items-center justify-center mb-2">
                  ...
                </button>
              </div>

              <div className="flex justify-between items-center w-full h-[121px] bg-white rounded-[10px] drop-shadow-sm mt-4 outline outline-1 outline-[#C2BEBE]">
                <div className="flex flex-col ml-[27px] space-y-1">
                  <label className="font-[roboto] font-[700] text-[20px] text-[#565555]">
                    Roselyn Moral
                  </label>

                  <label className="font-[roboto] font-[400] text-[20px] text-[#858689]">
                    Finished the Event Survey 10 days ago.
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

export default Responses;
