import { useNavigate } from 'react-router-dom';

function Employees() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Funcionários</h1>
      <button
        className="hover:text-primary"
        onClick={() => navigate('/auDigital/home')}
      >
        Voltar
      </button>
    </div>
  );
}

export default Employees;
