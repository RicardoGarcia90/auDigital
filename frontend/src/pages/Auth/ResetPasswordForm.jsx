import React, { useEffect, useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResetPasswordForm = ({ onConfirmMessage }) => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => {
    if (emailTouched) {
      const isValidEmail =
        email.length != 0 && email.includes('@') && email.includes('.com');
      setValidEmail(isValidEmail);
    }
  }, [email, emailTouched]);

  function handleSubmit(e) {
    e.preventDefault();

    setEmailTouched(true);

    const isValidEmail =
      email.length != 0 && email.includes('@') && email.includes('.com');

    if (isValidEmail) {
      const user = { email: email };
      console.log(user);

      onConfirmMessage(true);
      setEmail('');
      setEmailTouched(false);
    }
  }

  let message;
  if (emailTouched && !validEmail) {
    message = 'Digite um e-mail válido';
  }

  return (
    <>
      <form className="my-10" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailTouched(true);
            }}
            value={email}
            className={emailTouched && !validEmail ? 'invalid' : 'valid'}
          />
          <IoPerson className="absolute right-3 top-1/4" />
        </div>

        <div className="flex flex-col items-center gap-3 mt-6">
          <button className=" bg-primary px-4 py-2 min-[1110px]:px-6 min-[1110px]:py-3 rounded-lg shadow-sm hover:bg-greenLight text-white hover:text-textColor">
            Lembrar senha
          </button>

          {/* VOLTAR */}
          <Link
            to="/auDigital"
            className="text-blue hover:text-blueLight hover:underline flex items-center gap-1"
          >
            <FaArrowLeft />
            <span>Voltar</span>
          </Link>

          <div>
            <p className="text-center text-red-600">{message}</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordForm;
