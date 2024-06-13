import React, { useState } from 'react';
import resetImg from '../../assets/imagens/reset-img.png';
import CardAuth from './CardAuth';
import ResetPasswordForm from './ResetPasswordForm';
import SectionForm from './SectionForm';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [showConfirmeMessage, setShowConfirmeMessage] = useState(false);

  function handleConfirmMessage(confirmed) {
    setShowConfirmeMessage(confirmed);
  }

  return (
    <CardAuth>
      {/* IMAGEM RESET */}
      <div>
        <img src={resetImg} alt="Imagem de login" />
      </div>

      {/* FORM RESET */}
      {!showConfirmeMessage ? (
        <SectionForm
          textH3={'Esqueceu sua senha?'}
          textP={'Informe seu e-mail'}
        >
          <ResetPasswordForm onConfirmMessage={handleConfirmMessage} />
        </SectionForm>
      ) : (
        <SectionForm
          textH3={'Instruções enviadas para o e-mail!'}
          textP={'Siga as instruções enviadas para redefinir sua senha.'}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-green-600 text-sm">
              Caso não encontre o e-mail verifique sua caixa de spam.
            </p>
            <Link
              to="/auDigital"
              className="text-blue hover:text-blueLight hover:underline flex items-center gap-1"
            >
              <FaArrowLeft />
              <span>Voltar para página de Login</span>
            </Link>
          </div>
        </SectionForm>
      )}
    </CardAuth>
  );
};

export default ResetPassword;
