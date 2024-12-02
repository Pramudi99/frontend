import { Route, Routes } from "react-router-dom";
import { PATH_DASHBOARD } from "./paths";
import Search from "../Components/Search";
import Test from "../Components/Test";

const GlobalRouter = () => {
    return (
        <Routes>
            <Route path={PATH_DASHBOARD.dashboard} element={<Search/>} />
            <Route path={PATH_DASHBOARD.test} element={<Test/>} />
        </Routes>
    );
}

export default GlobalRouter;