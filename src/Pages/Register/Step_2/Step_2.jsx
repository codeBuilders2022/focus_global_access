//styles
import "./Step_2.scss"

//assets
import logo from "../../../assets/Logos/logo focus_w.png"
import warning from "../../../assets/icons/warning.svg"

//react
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Step_2 = () => {

    const navigate = useNavigate()
    const [bugs, setBugs] = useState(false)
    const [bugs1, setBugs1] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/register/step_3');
    }



    return (
        <div className="Step_2">
            <div className="card">
            </div>
            <form onSubmit={handleSubmit} className="Register">
                <div className="containerR">
                    <img src={logo} />
                    <h3>Register</h3>
                    <div className="input">
                        <label>Name</label>
                        <InputText id="name" name="name" placeholder="Name" type="text"
                        />
                    </div>
                    <div className="input">
                        <label>Last Name</label>
                        <InputText id="lastName" name="lastName" placeholder="Last Name" type="text"
                        />
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <Password id="Password" name="password" placeholder="password"
                        />
                    </div>
                    <div className="input">
                        <label>Repeat password</label>
                        <Password id="passwordR" name="passwordR"
                            placeholder="Password" feedback={false} />
                        {bugs ?
                            <div className="messageError">
                                <img src={warning} />
                                <p className="error">Las contraseñas no coinciden</p>

                            </div>
                            : <div className="messageError"></div>
                        }
                        {bugs1 ?
                            <div className="messageError">
                                <img src={warning} />
                                <p className="error">La contraseña debe tener al menos 8 caracteres</p>

                            </div>
                            : <div className="messageError"></div>
                        }
                    </div>
                    <div className="button" style={{ flexDirection: 'row', display: 'flex', gap: '20px' }}>

                        <Button label="Previus" type='button' className="b-b" onClick={() => navigate('/register')} />

                        <Button label="Continue" className="color" type='submit' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Step_2