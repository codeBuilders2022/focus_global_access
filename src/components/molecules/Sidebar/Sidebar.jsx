import React, { useEffect, useRef  } from 'react'
import { useStateContext } from '../../../context/ContextProvider'


import "./Sidebar.scss"
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ datas }) => {
  const navigate = useNavigate();
  const { openSidebar, setOpenSidebar } = useStateContext();
  const sidebarRef = useRef(null);

  const userDatas = [
    { id: 1, label: 'Create account', url: '/register' },
    { id: 2, label: 'Sign in', url: '/login' },
  ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setOpenSidebar(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [setOpenSidebar]);

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <aside ref={sidebarRef} className={`Asidme_ ${openSidebar && 'viewSidebar_'}`}>
      <section className='section_navlink-l'>
        {datas.map((_, idx) => (
          <NavLink key={idx} to={_.url} className='clas__link' onClick={() => closeSidebar()}>
            <img src={_.icon} alt='' className='navImg' />
            {_.title}
          </NavLink>
        ))}
      </section>
      <section className='section_btns'>
        {userDatas.map((_, idx) => (
          <button key={idx} className='clasBtn_' onClick={() => {navigate(_.url); closeSidebar()}}>
            {_.label}
          </button>
        ))}
      </section>
      <button className='btn_closer_' onClick={closeSidebar}>
        X
      </button>
    </aside>
  );
};


export default Sidebar