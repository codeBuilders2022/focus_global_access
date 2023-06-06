//styles
import "./Header.scss"

//assets
import logo from "../../../assets/Logos/logo_white.png"
import logoBlack from "../../../assets/Logos/logo_black.png"

import Menu from '../../../assets/images/menu.png'
import ArrowDown from '../../../assets/images/left-arrow.png'

import home from "../../../assets/images/home.png"
import catalogs from "../../../assets/images/catalogs.png"
import search from "../../../assets/images/search.png"
import at from "../../../assets/images/at.png"
import events from "../../../assets/images/events.png"
import info from "../../../assets/images/info.png"

import Moon from '../../../assets/images/moon.png'
import Sun from '../../../assets/images/sol.png'

//react
import { useNavigate, Link, NavLink } from "react-router-dom"
import { useStateContext } from '../../../context/ContextProvider'
import { useEffect, useRef, useState } from "react"
import Sidebar from "../../molecules/Sidebar/Sidebar"



const Header = () => {
    const navigate = useNavigate()
    
    const { handleTheme, theme, setTheme, openSidebar, setOpenSidebar } = useStateContext()
    const [myTheme, setMyTheme] = useState("")
    const [showCategories, setShowCategories] = useState(false)
    const profileRef = useRef();

    const navBar = [
        { title: "Home", icon: home, url: "/" },
        { title: "Search", icon: search, url: "/search" },
        { title: "Services", icon: catalogs, url: "#"},
        { title: "Events", icon: events, url: "#"},
        { title: "Publish", icon: at, url: "#"},
        { title: "About FOCUS G.A", icon: info, url: "#" },
    ]


    const filterOptions = navBar.filter(
      (elem) =>
        elem.title !== "Events" &&
        elem.title !== "Publish" &&
        elem.title !== "About FOCUS G.A"
    );

    const excludeOptions = navBar.filter(
        (exclude) =>
          exclude.title === "Events" ||
          exclude.title === "Publish" ||
          exclude.title === "About FOCUS G.A"
      );

    const handleClickOp = () => {
        setShowCategories(!showCategories)
    }

    const closeShow = () => {
        setShowCategories(false)
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        setMyTheme(storedTheme)
        if (storedTheme === "dark") {
            setTheme(true);
        }
    }, [theme])

    useEffect(() => {
        const findClass = document.querySelector(".cnt_excludeOp");
        if (!findClass) return; // Salir si no se encuentra el elemento
        
        if (showCategories) {
          const timeoutId = setTimeout(() => {
            findClass.classList.add("activeModal");
          }, 0);
          
          return () => clearTimeout(timeoutId); // Limpiar el timeout al desmontar el componente
        } else {
          findClass.classList.remove("activeModal");
        }
      }, [showCategories]);

      useEffect(() => {
        const handleClickOutside = (event) => {
          const classNamesToExclude = ['cnt_excludeOp', 'ctn_soport', 'cnt_ul', 'clas_categories', 'arrow-down'];
          const shouldCloseCategories = classNamesToExclude.every(className => !event.target.classList.contains(className));
      
          if (profileRef.current && !profileRef.current.contains(event.target) && shouldCloseCategories) {
            setShowCategories(false);
          }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
      
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <header className='Header'>
            <div className="left">
                <div className="logo">
                    {myTheme === "light" ? (
                        <img className="logoImg" src={logoBlack} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />    
                    ):(
                        <img className="logoImg" src={logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    )}
                </div>
                <nav className="navHeader">
                    {navBar.map((element, index) => {
                        return (
                            <li className="optionsNav" key={index}>
                                <NavLink to={element.url} className={"navlink_k"}>
                                    <img className="icon_" src={element.icon} />
                                    {element.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </nav>
                <nav className="navHeader-two">
                    {filterOptions.map((element, index) => {
                        return (
                            <li className="optionsNav" key={index}>
                                <NavLink to={element.url} className={"navlink_k"}>
                                    <img className="icon_" src={element.icon} />
                                    {element.title}
                                </NavLink>
                            </li>
                        )
                    })}
                    <div className={`cnt_list`}>
                        <li className="clas_categories" onClick={() => handleClickOp()}>Categories</li>
                        <img src={ArrowDown} alt="" className={`arrow-down ${showCategories && "roatte-e"}`} onClick={() => handleClickOp()}/>

                        {showCategories &&
                            <div className="ctn_soport" ref={profileRef}>
                                <div className={`cnt_excludeOp`}>
                                    <ul className="cnt_ul">
                                        {excludeOptions.map((_, idx) => (
                                            <li key={idx} className="l-iC" onClick={closeShow}>
                                                <NavLink to={_.url} className={"exclu_li"}>
                                                    <img src={_.icon} alt="" className="cino_exlu" />
                                                    {_.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        }


                    </div>
                </nav>
               
            </div>
            <section className="user_t">
                <div className="ntc_nav">
                    <NavLink to={"/register"} className={"user_new-r"}>Create account</NavLink>
                    <NavLink to={"/login"} className={"user_new-r"}>Sign in</NavLink>
                </div>
                {/* Este es el boton del cambio de tema */}
                <div className={`swith_`} onClick={handleTheme}>
                    {myTheme === "light" ? (
                        <img src={Moon} alt="" className="darkl" />
                        ) : (
                        <img src={Sun} alt="" className="img_icon" />
                    )}
                </div>
                <div className="cnt_menu" onClick={() => setOpenSidebar(true)}>
                    <img src={Menu} alt="" className="clMenu_u" />
                </div>
            </section>

            {openSidebar &&
                <Sidebar datas={navBar}/>
            }
        </header>
    )
}

export default Header