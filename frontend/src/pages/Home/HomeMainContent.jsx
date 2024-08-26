export default function HomeMainContent() {
  return (
    <>
      <div className="flex justify-center items-center py-20">
        <div className="grid grid-cols-2 gap-5">
          <span className="bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center">
            Alunos
          </span>
          <span className="bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center">
            Planos
          </span>
          <span className="bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center">
            Gerenciamento de pagamentos
          </span>
          <span className="bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center">
            Cadastro de acesso ao Portal
          </span>
          <span className="bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center">
            Relatórios
          </span>
          <span className="bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center">
            Funcionários
          </span>
        </div>
      </div>
    </>
  );
}
