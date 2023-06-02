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
import { Skeleton } from "primereact/skeleton"



const Step_3Skeleton = () => {
    return (
        <div className="Step_3">
            <div className="card">
            </div>
            <form className="Register">
                <div className="containerR">
                    <Skeleton width="150px" height="54px"></Skeleton>
                    <div style={{ marginTop: "10px" }}>
                        <Skeleton width="100px" height="30px"></Skeleton>
                    </div>
                    <div className="input">
                        <Skeleton width="100px" height="20px"></Skeleton>
                        <Skeleton width="100%" height="40px"></Skeleton>
                    </div>
                    <div className="input">
                        <Skeleton width="100px" height="20px"></Skeleton>
                        <Skeleton width="100%" height="40px"></Skeleton>
                    </div>
                    <div className="input">
                        <Skeleton width="100px" height="20px"></Skeleton>
                        <Skeleton width="100%" height="40px"></Skeleton>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'start', marginTop: '10px' }}>
                    <Skeleton width="100%" height="42px"></Skeleton>
                    </div>

                    <div className="button" style={{ flexDirection: 'row', display: 'flex', gap: '20px' }}>

                    <Skeleton width="100%" height="50px"></Skeleton>
                    <Skeleton width="100%" height="50px"></Skeleton>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Step_3Skeleton