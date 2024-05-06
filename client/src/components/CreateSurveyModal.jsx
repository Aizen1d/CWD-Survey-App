import { useState } from "react";
import { Modal, TextField, Textarea } from "@mui/material";
import useCreateSurveyModalStore from "../stores/CreateSurveyModalStore";

const CreateSurveyModal = () => {
  const createSurveyOpen = useCreateSurveyModalStore((state) => state.isOpen);
  const handleCreateSurveyClose = useCreateSurveyModalStore((state) => state.close);

  const [surveyName, setSurveyName] = useState('');
  const [surveyDescription, setSurveyDescription] = useState('');

  return (
    <>
      <Modal
        open={createSurveyOpen}
        onClose={handleCreateSurveyClose}
        onClick={handleCreateSurveyClose}
      > 
        <div className="flex justify-center items-center h-[100%]">
          <div onClick={(e) => e.stopPropagation()} className=" bg-white w-[500px] h-[auto] pb-10 rounded-[20px]">
            <div className="flex flex-col mt-[34px] mx-[46px] space-y-3">
              <label className="font-[outfit] font-[700] text-[30px] text-[#3E3C3C]">
                Create Survey
              </label>

              <TextField 
                variant="outlined" 
                style={{ width: '100%'}} 
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                label="Survey Name" 
                value={surveyName}
                onChange={(e) => setSurveyName(e.target.value)}
              />

              <TextField 
                variant="outlined" 
                style={{ width: '100%'}} 
                inputProps={{
                  style: {
                    height: "50px",
                  },
                }}
                label="Survey Description" 
                value={surveyDescription}
                onChange={(e) => setSurveyDescription(e.target.value)}
              />
              <label className='font-[roboto] font-[400] text-[14px] text-[#858689]'>
                Survey respondents will have access to the above fields.
              </label>

              <button
                className="w-full h-[49px] font-[roboto] font-[700] text-[18px] 
                          bg-[#0062FE] hover:bg-[#024dc7] disabled:bg-[#e0e0e0] transition-all duration-120 ease-in
                          text-white mt-2 rounded-[10px]"
                disabled={!surveyName}
                >
                Create
              </button>
              <button
                className="w-full h-[49px] font-[roboto] font-[700] text-[18px] 
                          bg-white hover:bg-[#f5f5f5] disabled:bg-[#e0e0e0] transition-all duration-120 ease-in
                          text-[#3E3C3C] mt-2 rounded-[10px] outline outline-1 outline-[#00000061]"
                onClick={handleCreateSurveyClose}
                >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CreateSurveyModal;