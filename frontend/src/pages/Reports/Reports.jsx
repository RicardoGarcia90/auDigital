import { useNavigate } from 'react-router-dom';

function Reports() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Relatórios</h1>
      <button
        className="hover:text-primary"
        onClick={() => navigate('/auDigital/home')}
      >
        Voltar
      </button>
    </div>
  );
}

export default Reports;
