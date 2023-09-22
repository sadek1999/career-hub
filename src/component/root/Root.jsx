import { Outlet } from "react-router-dom";
import Footar from "../footar/Footar";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footar></Footar>
        </div>
    );
};

export default Root;