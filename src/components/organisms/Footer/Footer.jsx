//styles
import "./Footer.scss"

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

    const social = [ facebook, youtube, linkedIn ]
    const [mytheme, setMytheme] = useState()

    useEffect(() => {
      const themes = localStorage.getItem("theme")
      setMytheme(themes)
    }, [])
    




    return (
        <footer className='Footer'>
            <div className="content">

                <div className="logo">
                    {mytheme === "light" ? (
                        <img className="logoImg" src={logo} />
                        // <img className="logoImg" src={logoDark} />
                    ):(
                        <img className="logoImg" src={logo} />
                    )}
                </div>
                <div className="options">
                    <div className='top'>
                        <Link>
                            About Focus G.A
                        </Link>
                        <Link>
                            Privacy policy
                        </Link>
                        <Link>
                            Terms and condicions
                        </Link>
                        <Link>
                            Advertise
                        </Link>
                        <Link>
                            Contact and support
                        </Link>
                        <Link>
                            Publication rules
                        </Link>
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