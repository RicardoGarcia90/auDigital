import { useState } from "react";
import MainContent from "../../components/layout/MainContent";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

import data from "../../../src/data/clients.json";

const ITEMS_PER_PAGE = 10;

const StudentManagementMainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

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
                "flex items-center bg-primary hover:bg-greenLight hover:cursor-pointer text-white hover:text-textColor font-bold px-4 py-2 rounded-xl hover:scale-105 duration-150"
              }
              onClick={() => { }}
            >
              + Novo Aluno
            </Button>

            <Input
              styleInput={
                "inline-block px-10 py-2 rounded-xl bg-bgTheme text-xl border-2 border-solid border-green-500 "
              }
            />
          </div>
        </div>

        {/* Table */}
        <div className="flex justify-center mt-20 w-full">
          <table className="tableContainer">
            <thead>
              <tr>
                <th className="tableHead">Nome do AUluno</th>
                <th className="tableHead">Data de nascimento</th>
                <th className="tableHead">Status do plano</th>
                <th className="tableHead">Responsável</th>
                <th className="tableHead">Ação</th>
              </tr>
            </thead>

            <tbody className="cursor-pointer">
              {currentData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`hover:text-primary ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                >
                  <td className="tableRowAndCol">{item.dogName}</td>
                  <td className="tableRowAndCol">{item.dateOfBirth}</td>
                  <td className="tableRowAndCol">{item.status}</td>
                  <td className="tableRowAndCol">{item.ownerName}</td>
                  <td className="tableRowAndCol">
                    <div className="flex items-center gap-2">
                      <button className="hover:text-blue">Editar</button>
                      <button className="hover:text-red-500">Excluir</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={
              "px-4 py-2 mx-2 border rounded bg-primary text-white disabled:bg-gray-300 hover:cursor-pointer hover:text-textColor font-bold px-4 py-2 rounded-xl hover:scale-105 duration-150"
            }
          >
            Página Anterior
          </Button>
          <span className="px-4 py-2">
            Página {currentPage} de {totalPages}
          </span>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={
              "px-4 py-2 mx-2 border rounded bg-primary text-white disabled:bg-gray-300 hover:cursor-pointer hover:text-textColor font-bold px-4 py-2 rounded-xl hover:scale-105 duration-150"
            }
          >
            Próxima Página
          </Button>
        </div>
      </MainContent>
    </div>
  );
};

export default StudentManagementMainContent;
