import Root from "../Root/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Middileside from "../Side/Middileside";
import NewsDetails from "../NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path:'/NewsDetails/:_id',
        element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/NewsDetails/:_id",
        element: <NewsDetails></NewsDetails>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
