import { useNavigate } from 'react-router-dom';

function PaymentManagement() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Gerenciamento de Pagamentos</h1>
      <button
        className="hover:text-primary"
        onClick={() => navigate('/auDigital/home')}
      >
        Voltar
      </button>
    </div>
  );
}

export default PaymentManagement;
