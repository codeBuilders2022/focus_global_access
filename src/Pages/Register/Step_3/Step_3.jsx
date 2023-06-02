//styles
import "./Step_3.scss"

//assets
import logo from "../../../assets/Logos/logo focus_w.png"
import warning from "../../../assets/icons/warning.svg"

//react
import { useNavigate } from "react-router-dom"
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"



const Step_3 = () => {
    const navigate = useNavigate()
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
    const occupationOptions = [
        { name: 'Investigador', code: 'AU' },
        { name: 'Estudiante', code: 'BR' },
        { name: 'Aficionado', code: 'CN' },
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const selectedTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const optionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="Step_3">
            <div className="card">
            </div>
            <form onSubmit={handleSubmit} className="Register">
                <div className="containerR">
                    <img src={logo} />
                    <h3>Register</h3>
                    <div className="input">
                        <label>Country</label>
                        <Dropdown name="contry" id="contry"
                            options={countries} optionLabel="name" placeholder="Select your country"
                            filter valueTemplate={selectedTemplate} itemTemplate={optionTemplate} className="w-full md:w-14rem" />

                    </div>
                    <div className="input">
                        <label>Occupation</label>
                        <Dropdown name="occupation" id="occupation"
                            options={occupationOptions} optionLabel="name" placeholder="Select your occupation"
                            valueTemplate={selectedTemplate} itemTemplate={optionTemplate} className="w-full md:w-14rem" />
                    </div>
                    <div className="input">
                        <label>Institution</label>
                        <InputText id="Institution" name="Institution" placeholder="Institution" type="text"
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'start', marginTop: '10px' }}>
                        <p style={{ textAlign: 'start' }}>By continuing you agree with our<span>Terms and conditions and Privacy policy.</span></p>
                    </div>

                    <div className="button" style={{ flexDirection: 'row', display: 'flex', gap: '20px' }}>

                        <Button label="Previus" type='button' className="b-b" onClick={() => navigate('/register/step_2')} />

                        <Button label="Register" className="color" type='submit' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Step_3