import React from "react";
import { Route, Routes } from "react-router-dom";
import { Convertor } from "../../pages/Convertor";
import { Contacts } from "../../pages/Contacts";

const AppRouter = () => {
    return(
        <Routes>
            <Route
                element={<Convertor/>}
                path={"/"}
            />
            <Route
                element={<Contacts/>}
                path={"/about_me"}
            />
            <Route
                element={<Convertor/>}
                path={"*"}
            />
        </Routes>
    )
}
export default AppRouter;