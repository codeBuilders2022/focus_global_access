//styles
import "./Footer.scss"

import { useStateContext } from '../../../context/ContextProvider'

//assets
import logo from "../../../assets/Logos/logo_white.png"
import logoDark from "../../../assets/Logos/logo_black.png"
import facebook from "../../../assets/icons/facebook.svg"
import youtube from "../../../assets/icons/youtube.svg"
import linkedIn from "../../../assets/icons/linkedIn.svg"

//react
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Footer = () => {

    const {theme, setTheme } = useStateContext()

    const social = [ facebook, youtube, linkedIn ]
    const [mytheme, setMytheme] = useState("")

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        setMytheme(storedTheme)
        if (storedTheme === "dark") {
            setTheme(true);
        }
    }, [theme])

    const links = [
        {
            id: 1,
            link: "About Focus G.A"
        },
        {
            id: 2,
            link: "Privacy policy"
        },
        {
            id: 3,
            link: "Terms and condicions"
        },
        {
            id: 4,
            link: "Advertise"
        },
        {
            id: 5,
            link: "Contact and support"
        },
        {
            id: 6,
            link: "Publication rules"
        },
    ]

    return (
        <footer className='Footer'>
            <div className="content">

                <div className="logo">
                    {mytheme === "light" ? (
                        <img className="logoImg" src={logoDark} />
                    ):(
                        <img className="logoImg" src={logo} />
                    )}
                </div>
                <div className="options">
                    <div className='top'>
                        {links.map((_, idx) => (
                            <Link key={idx}>{_.link}</Link>
                        ))}
                    </div>

                    <span>We use cookies to help provide and enhance our service and tailor content and ads. By continuing you agree to the use of cookies.

                        Copyright © FOCUS G.A® {new Date().getFullYear()}.</span>
                </div>

                <div className="social">
                    {social.map((element, index) => {
                        return (
                            <div className="elements" key={index}>
                                <img src={element} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </footer>
    )
}

export default Footer