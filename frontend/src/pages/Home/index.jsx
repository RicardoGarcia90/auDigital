import Header from '../../components/layout/Header';
import HomeMainContent from './HomeMainContent';
import Footer from '../../components/layout/Footer';
import NavMenuHome from '../../components/layout/NavMenuHome';

const Home = () => {
  return (
    <>
      <div className="pagesDefaultStyles">
        <div>
          <Header />
          <NavMenuHome />
          <HomeMainContent />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
