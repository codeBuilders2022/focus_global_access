import { BrowserRouter } from "react-router-dom";
import Guest from './Guest/Guest'
import React from 'react';
const MainRouter =()=>
{
    return(
        <>
            <BrowserRouter>
                <Guest></Guest>
            </BrowserRouter>
        </>
    )

}
export default MainRouter;
