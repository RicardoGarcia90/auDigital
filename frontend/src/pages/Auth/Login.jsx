import React from 'react';
import loginImg from '../../assets/imagens/login-img.png';

import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center py-4 gap-3 ">
        <div className="bg-white grid md:grid-cols-1 lg:grid-cols-2">
          {/* IMAGEM LOGIN */}
          <div>
            <img src={loginImg} alt="Imagem de login" className="mb-6" />
          </div>

          {/* FORM */}
          <div className="px-36">
            <h3 className="text-center md:text-2xl  lg:text-3xl  font-bold mb-3">
              Login
            </h3>
            <p className="text-center">Preencha os campos para acessar</p>
            <LoginForm />
          </div>
        </div>
      </div>

      {/* -------------------------- */}
      {/* AJUSTAR RESPONSIVIDADE */}
      {/* -------------------------- */}
    </>
  );
};

export default Login;
