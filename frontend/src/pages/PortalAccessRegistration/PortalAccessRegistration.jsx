import { useNavigate } from 'react-router-dom';

function PortalAccessRegistration() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Cadastro de acesso ao portal</h1>
      <button
        className="hover:text-primary"
        onClick={() => navigate('/auDigital/home')}
      >
        Voltar
      </button>
    </div>
  );
}

export default PortalAccessRegistration;
