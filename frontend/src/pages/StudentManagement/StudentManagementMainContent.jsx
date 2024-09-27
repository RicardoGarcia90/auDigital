import { useState } from "react";
import MainContent from "../../components/layout/MainContent";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

import data from "../../../src/data/clients.json";

const ITEMS_PER_PAGE = 10;

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
                "flex items-center bg-primary hover:bg-greenLight hover:cursor-pointer text-white hover:text-textColor font-bold px-4 py-2 rounded-xl hover:scale-105 duration-150"
              }
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
              <th className="tableHead">Nome do AUluno</th>
              <th className="tableHead">Data de nascimento</th>
              <th className="tableHead">Status do plano</th>
              <th className="tableHead">Responsável</th>
              <th className="tableHead">Ação</th>
            </thead>

            <tbody className=" cursor-pointer">
              {data.map((item, index) => (
                <tr key={item.id} className={`hover:text-primary ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
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

        {/* Pagination controls */}
        <div>
          <Button>
            Página Anterior
          </Button>

          {/* CONTINUAR COM PAGINAÇÃO DE TABELA */}
        </div>
      </MainContent>
    </div>
  );
};

export default StudentManagementMainContent;
