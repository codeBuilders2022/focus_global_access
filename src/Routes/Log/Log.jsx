import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "../../components/organisms/Layout/Layout";
import { Home } from "../../Pages/Home/Home";
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
                        <Route
                            exact
                            path="/"
                            element={
                                <Suspense fallback={<div>...Skeleton</div>}>
                                   <Home></Home>
                                </Suspense>
                            }
                        />
                    }
                />

            </Routes>
        </>
    );
};
export default Log;