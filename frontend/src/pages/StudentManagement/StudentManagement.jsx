import { useNavigate } from 'react-router-dom';

function StudentManagement() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Gerenciamento de Alunos</h1>
      <button
        className="hover:text-primary"
        onClick={() => navigate('/auDigital/home')}
      >
        Voltar
      </button>
    </div>
  );
}

export default StudentManagement;
