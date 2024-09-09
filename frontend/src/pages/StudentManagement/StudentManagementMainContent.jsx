import MainContent from '../../components/layout/MainContent';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const StudentManagementMainContent = () => {
  return (
    <div>
      <MainContent>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-center font-bold text-xl mb-10">
              Gerenciamento de AUlunos
            </h1>
          </div>

          <div className="flex justify-around w-full">
            <Button
              style={
                'flex items-center bg-primary hover:bg-greenLight hover:cursor-pointer text-white hover:text-textColor font-bold px-4 py-2 rounded-xl hover:scale-105 duration-150'
              }
            >
              + Novo Aluno
            </Button>

            <Input
              styleInput={
                'inline-block px-10 py-2 rounded-xl bg-bgTheme text-xl border-2 border-solid border-green-500 '
              }
            />
          </div>
        </div>
      </MainContent>
    </div>
  );
};

export default StudentManagementMainContent;
