import { FaPaw } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { TbDeviceIpadDollar } from 'react-icons/tb';
import { FaRegAddressCard } from 'react-icons/fa6';
import { TbReportSearch } from 'react-icons/tb';
import { FaPeopleGroup } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 0,
    name: 'Gerenciamento de AUlunos',
    icon: <FaPaw />,
    pathPage: '/auDigital/studentManagement',
  },
  {
    id: 1,
    name: 'Cadastro de planos',
    icon: <TbDeviceIpadDollar />,
    pathPage: '/auDigital/planRegistration',
  },
  {
    id: 2,
    name: 'Gerenciamento de pagamentos',
    icon: <MdOutlineAttachMoney />,
    pathPage: '/auDigital/paymentManagement',
  },
  {
    id: 3,
    name: 'Cadastro de acesso ao Portal',
    icon: <FaRegAddressCard />,
    pathPage: '/auDigital/portalAccessRegistration',
  },
  {
    id: 4,
    name: 'Relatórios',
    icon: <TbReportSearch />,
    pathPage: '/auDigital/reports',
  },
  {
    id: 5,
    name: 'Funcionários',
    icon: <FaPeopleGroup />,
    pathPage: '/auDigital/employees',
  },
];

export default function HomeMainContent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex justify-center items-center gap-4 bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center"
              onClick={() => navigate(service.pathPage)}
            >
              <span className="text-2xl">{service.icon}</span>
              <span className="text-xl">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
