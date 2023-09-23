import { Outlet } from "react-router-dom";
import Footar from "../footar/Footar";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            
            <Footar></Footar>
        </div>
    );
};

export default Root;