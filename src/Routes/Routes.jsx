import Root from "../Root/Root";
import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/Register',
                element:<Register></Register>
            }
        ]
    }
]);
export default router;