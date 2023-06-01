import { Route, Routes } from "react-router-dom";
import Layout from "../../components/organisms/Layout/Layout"
import { Suspense, lazy } from "react";
import HomeSkeleton from "../../Pages/Home/HomeSkeleton";
import Step_1Skeleton from "../../Pages/Register/Step_1/Step_1Skeleton";
import Step_2Skeleton from "../../Pages/Register/Step_2/Step_2Skeleton";
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
                                    <Suspense fallback={<HomeSkeleton></HomeSkeleton>}>
                                        <Home/>
                                        
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <Suspense fallback={ <Step_1Skeleton></Step_1Skeleton>}>
                                        <Step_1 />
                                       
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/register/step_2"
                                element={
                                    <Suspense fallback={ <Step_2Skeleton></Step_2Skeleton>}>
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