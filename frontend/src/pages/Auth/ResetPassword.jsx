import React from 'react';
import resetImg from '../../assets/imagens/reset-img.png';
import CardAuth from './CardAuth';
import ResetPasswordForm from './ResetPasswordForm';
import SectionForm from './SectionForm';

const ResetPassword = () => {
  return (
    <CardAuth>
      {/* IMAGEM RESET */}
      <div>
        <img src={resetImg} alt="Imagem de login" />
      </div>

      {/* FORM RESET */}
      <SectionForm textH3={'Esqueceu sua senha?'} textP={'Informe seu e-mail'}>
        <ResetPasswordForm />
      </SectionForm>
    </CardAuth>
  );
};

export default ResetPassword;
