import React from 'react';
import loginImg from '../../assets/imagens/login-img.png';
import CardAuth from './CardAuth';
import LoginForm from './LoginForm';
import Form from './SectionForm';

const Login = () => {
  return (
    <CardAuth>
      {/* IMAGEM LOGIN */}
      <div>
        <img src={loginImg} alt="Imagem de login" />
      </div>

      {/* FORM */}
      <Form textH3={'Login'} textP={'Preencha os campos para acessar'}>
        <LoginForm />
      </Form>
    </CardAuth>
  );
};

export default Login;
