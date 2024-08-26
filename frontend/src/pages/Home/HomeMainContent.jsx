import { FaPaw } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { TbDeviceIpadDollar } from 'react-icons/tb';
import { FaRegAddressCard } from 'react-icons/fa6';
import { TbReportSearch } from 'react-icons/tb';
import { FaPeopleGroup } from 'react-icons/fa6';

const servicesData = [
  {
    id: 0,
    name: 'Gerenciamento de AUlunos',
    icon: <FaPaw />,
  },
  {
    id: 1,
    name: 'Cadastro de planos',
    icon: <TbDeviceIpadDollar />,
  },
  {
    id: 2,
    name: 'Gerenciamento de pagamentos',
    icon: <MdOutlineAttachMoney />,
  },
  {
    id: 3,
    name: 'Cadastro de acesso ao Portal',
    icon: <FaRegAddressCard />,
  },
  {
    id: 4,
    name: 'Relatórios',
    icon: <TbReportSearch />,
  },
  {
    id: 5,
    name: 'Funcionários',
    icon: <FaPeopleGroup />,
  },
];

export default function HomeMainContent() {
  return (
    <>
      <div className="flex justify-center items-center py-20">
        <div className="grid grid-cols-2 gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex justify-center items-center gap-4 bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center"
            >
              <span className="text-3xl">{service.icon}</span>
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
