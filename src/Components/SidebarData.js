import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';

export const SidebarData =  [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Notion',
        path: '/notion',
        icon: <SiIcons.SiNotion />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Suport',
        path: '/suport',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]
    

export default SidebarData;
