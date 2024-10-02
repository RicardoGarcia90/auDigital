import { FaPaw } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { TbDeviceIpadDollar } from 'react-icons/tb';
import { FaRegAddressCard } from 'react-icons/fa6';
import { TbReportSearch } from 'react-icons/tb';
import { FaPeopleGroup } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import MainContent from '../../components/layout/MainContent';

import servicesData from '../../data/services.json'

const iconMapping = {
  FaPaw: FaPaw,
  MdOutlineAttachMoney: MdOutlineAttachMoney,
  TbDeviceIpadDollar: TbDeviceIpadDollar,
  FaRegAddressCard: FaRegAddressCard,
  TbReportSearch: TbReportSearch,
  FaPeopleGroup: FaPeopleGroup,
};

const HomeMainContent = () => {
  const navigate = useNavigate();
  return (
    <MainContent>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {servicesData.map((service) => {
          const IconComponent = iconMapping[service.icon];
          return (
            <div
              key={service.id}
              className="flex justify-center items-center gap-4 bg-bgCard hover:bg-bgCardHover hover:cursor-pointer p-10 rounded-3xl text-center"
              onClick={() => navigate(service.pathPage)}
            >
              <span className="text-2xl">{<IconComponent />}</span>
              <span className="text-xl">{service.name}</span>
            </div>
          )
        })}
      </div>
    </MainContent>
  );
};

export default HomeMainContent;
