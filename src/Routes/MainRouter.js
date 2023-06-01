import { BrowserRouter } from "react-router-dom";
import Guest from './Guest/Guest'
import "./MainRouter.scss"
import { useEffect } from "react";
const MainRouter =()=>{

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const isDarkTheme = storedTheme === "dark";
    
        if (isDarkTheme) {
            setTimeout(() => {
                document.body.classList.add("dark");
            }, 0);
        } else {
            document.body.classList.remove("dark");
        }
    }, []);


 return(
        <>
            <BrowserRouter>
                <Guest></Guest>
            </BrowserRouter>
        </>
    )

}
export default MainRouter;
