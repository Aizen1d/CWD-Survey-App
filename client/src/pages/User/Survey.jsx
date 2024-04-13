import { Link } from 'react-router-dom';

const Survey = () => {
  return (
    <div>
      <h1>Surveys</h1>
      <div className="flex flex-col">
        <Link to="/surveys">Go to survey</Link>
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    </div>
  );
};

export default Survey;
