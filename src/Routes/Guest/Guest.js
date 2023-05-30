import { Route, Routes } from "react-router-dom";
import React, {Suspense} from "react";
import HelloWorld from "../../Pages/HelloWorld/HelloWorld";
const Guest = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>...Skeleton</div>}>
                <HelloWorld></HelloWorld>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
export default Guest;
