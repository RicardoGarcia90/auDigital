import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { MdKey } from 'react-icons/md';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = email.includes('@') && email.includes('.com');
  const isValidPassword = password.length >= 6;

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValidEmail && !isValidPassword) {
      alert('Por favor insira seu e-mail e sua senha para acessar.');
    } else if (!isValidEmail && isValidPassword) {
      alert('Digite um email válido!');
    } else if (isValidEmail && !isValidPassword) {
      alert('Digite uma senha válida (Mínimo 6 digitos)!');
    } else {
      const user = { email: email, password: password };
      console.log(user);
    }

    setEmail('');
    setPassword('');
  }

  return (
    <>
      <form className="my-10 flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-1 border-b w-full  border-textColor focus:border-primary outline-none placeholder-textColor bg-transparent"
          />
          <IoPerson className="absolute right-3 top-1/4" />
        </div>

        <div className="relative">
          <input
            type="text"
            name="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-1 border-b w-full border-textColor focus:border-primary outline-none placeholder-textColor bg-transparent"
          />
          <MdKey className="absolute right-3 top-1/4" />
        </div>

        {/* PASSWORD RESET LINK AND BUTTON LOGIN*/}
        <div className="flex justify-around items-center mt-5">
          <div className="flex gap-2">
            <span>Esqueceu a senha?</span>
            <Link
              to="/reset"
              className="text-blue hover:text-blueLight hover:underline"
            >
              Resetar
            </Link>
          </div>

          <button className="bg-primary px-6 py-3 rounded-lg shadow-sm hover:bg-greenLight">
            <FaArrowRightLong className="text-white" />
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
