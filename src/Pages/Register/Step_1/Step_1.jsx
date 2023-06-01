//styles
import "./Step_1.scss"

//assets
import { useState } from "react"
import logo from "../../../assets/Logos/logo focus_w.png"
import warning from "../../../assets/icons/warning.svg"

//react
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Step_1 = () => {

    const [activate, setActivate] = useState(false)

    return (
        <div className="Step_1">
            <div className="card"></div>
            <form className="Register">
                <div className="containerR">
                    <img src={logo} />
                    <h3>Welcome</h3>
                    <p>Enter your email to continue</p>
                    <div className="input">
                        <label>E-mail</label>
                        <InputText id="email" name="email" placeholder="E-mail" type="email"
                        />
                        {activate &&
                            <div className="messageError">
                                <img src={warning} />
                                <p className="error">Ya existe una cuenta con este email</p>
                            </div>

                        }
                    </div>
                    <div className="button">
                        <Button label="Continue" severity="secondary" type='submit' className="color" />
                    </div>
                    <div className="button">
                        <Button label="Sing in via your institution" severity="secondary" className="b-b" />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Step_1