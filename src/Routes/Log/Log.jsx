import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import HelloWorld from "../../Pages/HelloWorld/HelloWorld";
import Layout from "../../components/organisms/Layout/Layout";
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
                                    <HelloWorld></HelloWorld>
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