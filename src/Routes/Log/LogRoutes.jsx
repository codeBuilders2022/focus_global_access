import { Route, Routes } from "react-router-dom";
import Layout from "../../components/organisms/Layout/Layout"
import { Suspense, lazy } from "react";
const Home = lazy(()=>import('../../Pages/Home/Home')) 
const Step_1 = lazy(()=>import('../../Pages/Register/Step_1/Step_1')) 
const Step_2 = lazy(()=>import('../../Pages/Register/Step_2/Step_2')) 



const LogRoutes = () => {

    return (
        <>
            <Routes>
                <Route
                    element={
                        <Layout />
                    }
                    children={
                        <>
                            <Route
                                path="/"
                                element={
                                    <Suspense fallback={<div>...Skeleton</div>}>
                                        <Home />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <Suspense fallback={<div>...Skeleton</div>}>
                                        <Step_1 />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/register/step_2"
                                element={
                                    <Suspense fallback={<div>...Skeleton</div>}>
                                        <Step_2 />
                                    </Suspense>
                                }
                            />
                        </>
                    }
                />
            </Routes>
        </>
    );
};
export default LogRoutes;