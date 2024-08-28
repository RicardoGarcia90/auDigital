import loginImg from '../../assets/imagens/login-img.png';
import CardAuth from './CardAuth';
import LoginForm from './LoginForm';
import SectionForm from './SectionForm';

const Login = () => {
  return (
    <CardAuth>
      {/* IMAGEM LOGIN */}
      <div>
        <img src={loginImg} alt="Imagem de login" />
      </div>

      {/* FORM */}
      <SectionForm textH3={'Login'} textP={'Preencha os campos para acessar'}>
        <LoginForm />
      </SectionForm>
    </CardAuth>
  );
};

export default Login;
