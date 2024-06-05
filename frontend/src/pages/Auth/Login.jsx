import React from 'react';
import loginImg from '../../assets/imagens/login-img.png';

import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <div className="bg-white grid md:grid-cols-1 lg:grid-cols-2">
          {/* IMAGEM LOGIN */}
          <div>
            <img src={loginImg} alt="Imagem de login" />
          </div>

          {/* FORM */}
          <div className="px-36 flex flex-col justify-center">
            <h3 className="text-center md:mt-10 md:text-2xl  lg:text-3xl  font-bold mb-3">
              Login
            </h3>
            <p className="text-center text-lg">
              Preencha os campos para acessar
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
