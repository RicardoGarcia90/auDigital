import React from 'react';
import logo from '../../assets/imagens/logo-svg-semFundo.svg';

import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-bgCard p-6 rounded-lg shadow-lg">
          {/* HEADER LOGIN CARD */}
          <div className="flex items-end">
            <div>
              <h1 className="text-3xl font-bold">Login</h1>
              <p>Preencha os campos para entrar.</p>
            </div>
            <img
              src={logo}
              alt="Logo AuDigital na tela de login"
              className="w-28 h-28"
            />
          </div>

          {/* FORM */}
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
