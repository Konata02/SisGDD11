import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
  {
    title: 'Gênero',
    path: '/genero',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'DashBoard',
    path: '/dashboard',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Game Design',
    path: '/gdd',
    icon: <FiIcons.FiUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Relatório',
    path: '/relatorio',
    icon: <BsIcons.BsBuilding />,
    cName: 'nav-text'
  },
  
];
