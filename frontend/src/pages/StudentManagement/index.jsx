import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import NavMenu from '../../components/layout/NavMenu';
import StudentManagementMainContent from './StudentManagementMainContent';

function StudentManagement() {
  return (
    <div className="pagesDefaultStyles">
      <Header />
      <div className="grid grid-cols-[15%_85%]">
        <NavMenu />
        <StudentManagementMainContent />
      </div>

      <Footer />
    </div>
  );
}

export default StudentManagement;
