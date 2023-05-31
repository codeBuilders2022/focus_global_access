import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "../../components/organisms/Layout/Layout";
import { Home } from "../../Pages/Home/Home";
import Step_1 from "../../Pages/Register/Step_1/Step_1";
const Log = () => {
    return (
        <>
            <Routes>
                <Route
                    exact
                    element={
                        <Layout />
                    }
                    children={
                        <>
                            <Route
                                exact
                                path="/"
                                element={
                                    <Suspense fallback={<div>...Skeleton</div>}>
                                        <Home></Home>
                                    </Suspense>
                                }
                            />
                            <Route
                                exact
                                path="/register"
                                element={
                                    <Suspense fallback={<div>...Skeleton</div>}>
                                        <Step_1/>
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
export default Log;