import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import HelloWorld from "../../Pages/HelloWorld/HelloWorld";
import Log from "../Log/Log";
const Guest = () => {
  return (
    <>
      <Log></Log>
    </>
  );
};
export default Guest;
