import { useNavigate } from 'react-router-dom';

function PlanRegistration() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Cadastro de Planos</h1>
      <button
        className="hover:text-primary"
        onClick={() => navigate('/auDigital/home')}
      >
        Voltar
      </button>
    </div>
  );
}

export default PlanRegistration;
