import NavMenu from './NavMenu';
import imgDog1 from '../../assets/imagens/header-img/img-header.svg';
import imgDog2 from '../../assets/imagens/header-img/img-header2.svg';
import logo from '../../assets/imagens/logo-svg-semFundo.svg';

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center w-full py-3 bg-bgHeader">
        <img src={imgDog1} alt="Imagem header dog" />
        <div className="flex justify-cente items-center">
          <span>
            <img src={logo} alt="Logo AuDigital" className="h-20" />
          </span>
          <p className="text-2xl">
            Transformando o cuidado dos peludos em uma experiência digital
            perfeita!
          </p>
        </div>

        <img src={imgDog2} alt="Imagem header dog" />
      </div>
      <NavMenu />
    </>
  );
};

export default Header;
