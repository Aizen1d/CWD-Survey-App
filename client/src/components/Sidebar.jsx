import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signoutUser } from "../api/Auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const signoutMutation = useMutation({
    mutationFn: signoutUser,
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred", {
        toastId: error.response?.data?.message,
      });
    },
  });

  const signOutClick = async () => {
    if (signoutMutation.isLoading) {
      return;
    }

    signoutMutation.mutate();
  };

  return (
    <>
      <div className="flex flex-col justify-between float-left sticky top-0 left-0 bg-white 
                      border-r-2 pt-[43px] w-[90px] h-[100vh] sm:w-[150px] md:w-[300px]">
        <div>
          <label
            className="font-[outfit] font-bold text-[#0062FE] text-[30px] h-12 ml-[11px] md:ml-[45px]">
            Logo
          </label>

          <div className="items-center flex flex-col mt-[50px] space-y-3">
            <button
              className="flex font-[roboto] font-[400] text-[#3E3D3D] text-[20px] h-[50px] w-[70px] items-center
                          hover:bg-[#F0F9FF] hover:rounded hover:text-[#1473E0] hover:font-[700] 
                          focus:bg-[#F0F9FF] focus:rounded focus:text-[#1473E0] focus:font-[700]
                          md:w-[280px]">
              <img
                src="/icons/Sidebar/dashboard.svg"
                alt="dashboard"
                className="w-[33px] h-[24px] ml-[18px] mr-4 md:ml-[37px]">
              </img>
              <span className="md:inline hidden">Dashboard</span>
            </button>

            <button
              className="flex font-[roboto] font-[400] text-[#3E3D3D] text-[20px] h-[50px] w-[70px] items-center
                          hover:bg-[#F0F9FF] hover:rounded hover:text-[#1473E0] hover:font-[700] 
                          focus:bg-[#F0F9FF] focus:rounded focus:text-[#1473E0] focus:font-[700]
                          md:w-[280px]">
              <img
                src="/icons/Sidebar/surveys.svg"
                alt="dashboard"
                className="w-[33px] h-[24px] ml-[18px] mr-4 md:ml-[37px]">
              </img>
              <span className="md:inline hidden">Surveys</span>
            </button>

            <button
              className="flex font-[roboto] font-[400] text-[#3E3D3D] text-[20px] h-[50px] w-[70px] items-center
                          hover:bg-[#F0F9FF] hover:rounded hover:text-[#1473E0] hover:font-[700] 
                          focus:bg-[#F0F9FF] focus:rounded focus:text-[#1473E0] focus:font-[700]
                          md:w-[280px]">
              <img
                src="/icons/Sidebar/responses.svg"
                alt="dashboard"
                className="w-[33px] h-[24px] ml-[18px] mr-4 md:ml-[37px]">
              </img>
              <span className="md:inline hidden">Responses</span>
            </button>

            <button
              className="flex font-[roboto] font-[400] text-[#3E3D3D] text-[20px] h-[50px] w-[70px] items-center
                          hover:bg-[#F0F9FF] hover:rounded hover:text-[#1473E0] hover:font-[700] 
                          focus:bg-[#F0F9FF] focus:rounded focus:text-[#1473E0] focus:font-[700]
                          md:w-[280px]"
            >
              <img
                src="/icons/Sidebar/draft.svg"
                alt="dashboard"
                className="w-[33px] h-[24px] ml-[18px] mr-4
                                                          md:ml-[37px]"
              ></img>
              <span className="md:inline hidden">Drafts</span>
            </button>

            <button
              className="flex font-[roboto] font-[400] text-[#3E3D3D] text-[20px] h-[50px] w-[70px] items-center
                          hover:bg-[#F0F9FF] hover:rounded hover:text-[#1473E0] hover:font-[700] 
                          focus:bg-[#F0F9FF] focus:rounded focus:text-[#1473E0] focus:font-[700]
                          md:w-[280px]"
            >
              <img
                src="/icons/Sidebar/trash.svg"
                alt="dashboard"
                className="w-[33px] h-[24px] ml-[18px] mr-4
                                                          md:ml-[37px]"
              ></img>
              <span className="md:inline hidden">Trash</span>
            </button>
          </div>
        </div>

        <div
          className="inset-x-0 bottom-0 flex h-[85px] justify-between ml-[22px]
                    md:px-[10px]"
        >
          <button id="menuButton">
            <div className="flex items-center">
              <img src="/icons/Sidebar/user.svg" alt="user" className="w-[50px]"></img>

              <div className="flex flex-col ml-3 text-left min-w-[140px]">
                <label
                  className="font-[roboto] font-[400] text-[#3E3D3D] text-[20px] mb-[-10px]
                              md:inline hidden"
                >
                  John Doe
                </label>
                <label
                  className="font-[roboto] font-[400] text-[#858689] text-[20px]
                              md:inline hidden"
                >
                  Admin
                </label>
              </div>
              <div className="ml-auto">
                <img
                  src="/icons/Sidebar/arrow.svg"
                  alt="arrow"
                  className="w-[22px] md:inline hidden"
                ></img>
              </div>
            </div>
          </button>

          <div className="relative flex">
            <div
              id="menu"
              className="items-center flex absolute transform -translate-x-[282px] bottom-full z-10 w-[285px] h-[100px] origin-bottom-right rounded-md bg-white border-[1px] border-#C2BEBE focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="flex items-center w-[284px] h-10 px-[30px] font-[roboto] font-[400] text-[#858689] text-[20px] hover:font-[600] hover:text-[#0062FE] hover:bg-[#E5EFFF]"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Settings
                </a>
                <button
                  type="submit"
                  className="w-[284px] h-10 px-[30px] text-left font-[roboto] font-[400] text-[#858689] text-[20px] block hover:font-[600] hover:text-[#0062FE] hover:bg-[#E5EFFF]"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                  onClick={signOutClick}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
