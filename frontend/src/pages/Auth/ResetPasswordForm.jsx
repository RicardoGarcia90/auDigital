import React, { useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const isValidEmail =
    email.length != 0 && email.includes('@') && email.includes('.com');

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValidEmail) {
      alert('Digite um email válido!');
      return;
    }

    console.log(email);

    setEmail('');
  }

  return (
    <>
      <form className="my-10" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-1 border-b w-full border-textColor focus:border-primary outline-none placeholder-textColor bg-transparent"
          />
          <IoPerson className="absolute right-3 top-1/4" />
        </div>

        <div className="flex flex-col items-center gap-3 mt-6">
          <button className=" bg-primary px-4 py-2 min-[1110px]:px-6 min-[1110px]:py-3 rounded-lg shadow-sm hover:bg-greenLight text-white hover:text-textColor">
            Lembrar senha
          </button>

          {/* VOLTAR */}
          <Link
            to="/"
            className="text-blue hover:text-blueLight hover:underline"
          >
            Voltar
          </Link>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordForm;
