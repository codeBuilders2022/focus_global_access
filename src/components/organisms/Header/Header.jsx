//styles
import "./Header.scss"

//assets
import logo from "../../../assets/Logos/logo_white.png"
import home from "../../../assets/icons/home.svg"
import catalogs from "../../../assets/icons/catalogs.svg"
import search from "../../../assets/icons/search.svg"
import at from "../../../assets/icons/at.svg"
import events from "../../../assets/icons/events.svg"
import info from "../../../assets/icons/info.svg"
import Moon from '../../../assets/images/moon.png'
import Sun from '../../../assets/images/sol.png'

//react
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"



const Header = () => {
    const navigate = useNavigate()
    const [theme, setTheme] = useState(false)

    const navBar = [
        { title: "Home", icon: home, url: "/" },
        { title: "Search", icon: search, url: "search" },
        { title: "Services", icon: catalogs, },
        { title: "Events", icon: events, },
        { title: "Publish", icon: at, },
        { title: "About FOCUS G.A", icon: info, },
    ]

    const handleTheme = () => {
        document.body.classList.toggle("dark_")
        setTheme(!theme)
    }




    return (
        <header className='Header'>
            <div className="left">
                <div className="logo">
                    <img className="logoImg" src={logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    {/* <h1 className="title"><span></span>Focus</h1> */}
                </div>
                <nav className="navHeader">
                    {navBar.map((element, index) => {
                        return (
                            <div className="optionsNav" key={index}>
                                <Link to={element.url}>
                                    <img className="icon_" src={element.icon} />
                                    {element.title}
                                </Link>
                                <div className="barButtom"></div>
                            </div>
                        )
                    })}
                </nav>
            </div>
            <section className="user_t">
                <button onClick={() => navigate('/register')}>Sign up</button>
                <button onClick={() => navigate('/login')}>Log in</button>
                <div className={`swith_ ${theme && "dark_"}`} onClick={handleTheme}>
                    {theme ? (
                        <img src={Moon} alt="" className="img_icon" />
                    ) : (
                        <img src={Sun} alt="" className="img_icon" />
                    )}
                </div>
            </section>
        </header>
    )
}

export default Header