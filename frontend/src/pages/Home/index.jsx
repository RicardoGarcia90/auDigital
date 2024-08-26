import Header from '../../components/layout/Header';
import HomeMainContent from './HomeMainContent';
import Footer from '../../components/layout/Footer';

export default function Home() {
  return (
    <>
      <div className="bg-white w-full min-h-screen">
        <div className="flex flex-col items-center mt-10 ">
          <Header />
          <HomeMainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
