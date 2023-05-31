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

//react
import { useNavigate, Link } from "react-router-dom"



const Header = () => {

    const navBar = [
        { title: "Home", icon: home, url: "/" },
        { title: "Search", icon: search, url: "search" },
        { title: "Services", icon: catalogs,},
        { title: "Events", icon: events,},
        { title: "Publish", icon: at,},
        { title: "About FOCUS G.A", icon: info,},
    ]
  
    const navigate = useNavigate()

    return (
        <div className='Header'>
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
                                    <img className="icon" src={element.icon} />
                                    {element.title}
                                </Link>
                                <div className="barButtom"></div>
                            </div>
                        )
                    })}
                </nav>
            </div>
            <div className="user">
                <button onClick={() => navigate('/register')}>Sign up</button>
                <button onClick={() => navigate('/login')}>Log in</button>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
            </div>
        </div>
    )
}

export default Header