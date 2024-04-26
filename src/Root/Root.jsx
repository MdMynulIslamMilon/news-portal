import {Outlet} from "react-router-dom";
const Root = () => {
    return (
        <div className="max-w-6xl text-center font-poppins">
           <Outlet></Outlet>
        </div>
    );
};

export default Root;