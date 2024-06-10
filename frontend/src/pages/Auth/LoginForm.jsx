import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (emailTouched) {
      const isValidEmail =
        email.length > 0 && email.includes('@') && email.includes('.com');
      setValidEmail(isValidEmail);
    }

    if (passwordTouched) {
      const isValidPassword = password.length >= 6;
      setValidPassword(isValidPassword);
    }
  }, [email, password, emailTouched, passwordTouched]);

  function handleShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setEmailTouched(true);
    setPasswordTouched(true);

    const isValidEmail =
      email.length > 0 && email.includes('@') && email.includes('.com');
    const isValidPassword = password.length >= 6;

    if (isValidEmail && isValidPassword) {
      const user = { email: email, password: password };
      console.log(user);
      setEmail('');
      setPassword('');
      setEmailTouched(false);
      setPasswordTouched(false);
    }
  }

  let message;
  if (emailTouched && passwordTouched) {
    if (!validEmail && !validPassword) {
      message = 'Digite um email e uma senha para entrar.';
    } else if (!validEmail) {
      message = 'Digite um email válido!';
    } else if (!validPassword) {
      message = 'Digite uma senha válida (Mínimo 6 dígitos)!';
    }
  }

  return (
    <>
      <form className="my-10 flex flex-col gap-3" onSubmit={handleSubmit}>
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

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordTouched(true);
            }}
            value={password}
            className={passwordTouched && !validPassword ? 'invalid' : 'valid'}
          />
          <button type="button" onClick={handleShowPassword}>
            {!showPassword && <LuEye className="absolute right-3 top-1/4" />}
            {showPassword && <LuEyeOff className="absolute right-3 top-1/4" />}
          </button>
        </div>

        {/* PASSWORD RESET LINK AND BUTTON LOGIN*/}
        <div className="flex justify-around items-center mt-5">
          <div className="flex gap-2 text-sm min-[1110px]:text-base">
            <span>Esqueceu a senha?</span>
            <Link
              to="/reset"
              className="text-blue hover:text-blueLight hover:underline"
            >
              Resetar
            </Link>
          </div>

          <button className="bg-primary px-4 py-2 min-[1110px]:px-6 min-[1110px]:py-3 rounded-lg shadow-sm hover:bg-greenLight">
            <FaArrowRightLong className="text-white" />
          </button>
        </div>

        <div>
          <p className="text-center text-red-600">{message}</p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
