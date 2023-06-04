//styles
import "./Header.scss"

//assets
import logo from "../../../assets/Logos/logo_white.png"
import logoBlack from "../../../assets/Logos/logo_black.png"

import home from "../../../assets/images/home.png"
import catalogs from "../../../assets/images/catalogs.png"
import search from "../../../assets/images/search.png"
import at from "../../../assets/images/at.png"
import events from "../../../assets/images/events.png"
import info from "../../../assets/images/info.png"

import Moon from '../../../assets/images/moon.png'
import Sun from '../../../assets/images/Sol.png'

//react
import { useNavigate, Link, NavLink } from "react-router-dom"
import { useStateContext } from '../../../context/ContextProvider'
import { useEffect, useState } from "react"



const Header = () => {
    const navigate = useNavigate()
    const { handleTheme, theme } = useStateContext()
    const [myTheme, setMyTheme] = useState("")
    const navBar = [
        { title: "Home", icon: home, url: "/" },
        { title: "Search", icon: search, url: "search" },
        { title: "Services", icon: catalogs, },
        { title: "Events", icon: events, },
        { title: "Publish", icon: at, },
        { title: "About FOCUS G.A", icon: info, },
    ]

    useEffect(() => {
        const themes = localStorage.getItem("theme")
        setMyTheme(themes)
    }, [theme])

    console.log(theme)

    console.log(myTheme, "my theme")

    return (
        <header className='Header'>
            <div className="left">
                <div className="logo">
                    {myTheme === "light" ? (
                        <img className="logoImg" src={logoBlack} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />    
                    ):(
                        <img className="logoImg" src={logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    )}
                    {/* <h1 className="title"><span></span>Focus</h1> */}
                </div>
                <nav className="navHeader">
                    {navBar.map((element, index) => {
                        return (
                            <section className="optionsNav" key={index}>
                                <NavLink to={element.url} className={"navlink_k"}>
                                    <img className="icon_" src={element.icon} />
                                    {element.title}
                                </NavLink>
                            </section>
                        )
                    })}
                </nav>
            </div>
            <section className="user_t">
                <button onClick={() => navigate('/register')}>Create account</button>
                <button onClick={() => navigate('/login')}>Sign in</button>
                <div className={`swith_`} onClick={handleTheme}>
                    {myTheme === "light" ? (
                        <img src={Moon} alt="" className="darkl" />
                        ) : (
                        <img src={Sun} alt="" className="img_icon" />
                    )}
                </div>
            </section>
        </header>
    )
}

export default Header