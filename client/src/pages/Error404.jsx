import { useRouteError, useNavigate } from "react-router-dom";

export default function Error404() {
  const error = useRouteError();
  const navigate = useNavigate();
  // console.log(error);

  return (
    <div id="error-page">
      <div className="h-screen flex flex-col justify-center items-center">
        <label className="font-[outfit] font-[700] text-9xl">
          404
        </label>
        <label className="font-[outfit] font-[700] text-5xl">
          Page not found
        </label>
        <button className="mt-10 font-[inter] font-[700] text-1xl text-white bg-[#0062FE] hover:bg-[#0061fee2] rounded-lg p-2"
          onClick={() => navigate(-1)}>
          Return to previous page
        </button>
      </div>
    </div>
  );
}