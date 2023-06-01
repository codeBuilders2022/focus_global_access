//styles
import "./Step_1.scss"
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const Step_1Skeleton = () => {

    return (
        <div className="Step_1">
            <div className="card"></div>
            <form  className="Register">
                <div className="containerR">
                    <Skeleton width="150px" height="54px"></Skeleton>
                    <div style={{marginTop:"10px"}}>
                        <Skeleton width="100px" height="35px"></Skeleton>
                    </div>
                    <p style={{marginTop:"7px"}}> <Skeleton width="150px" height="18px"></Skeleton></p>
                    <div className="input">
                        <Skeleton width="100px" height="20px"></Skeleton>
                        <Skeleton width="100%" height="40px"></Skeleton>
                    </div>
                    <div className="button">
                        <Skeleton width="100%" height="50px"></Skeleton>
                    </div>
                    <div className="button">
                    <Skeleton width="100%" height="50px"></Skeleton>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Step_1Skeleton