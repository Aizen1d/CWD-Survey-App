const CreateSurveyButton = ({onButtonClick}) => {
  return (
    <button 
      className="w-[180px] h-[46px] bg-[#0062FE] rounded-[10px] font-[roboto] font-[700] text-[20px] text-white float-right"
      onClick={onButtonClick}>
      + Create Survey
    </button>
  );
}

export default CreateSurveyButton;