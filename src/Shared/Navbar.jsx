
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleSignOut =()=>{
      logOut()
      .then()
      .catch()
  }
  return (
    <div className="">
      <div className="flex justify-end items-center gap-24 my-4 bg-base-100">
        <div className="list-none gap-4 flex ml-24">
         <li><NavLink to="/">Home</NavLink> </li>
         <li><NavLink to="/About">About</NavLink> </li>
         <li><NavLink to="/Carrier">Carrier</NavLink> </li>
      
        </div>
        <div className="flex gap-4">
        {
          user ?  <button className="btn" onClick={handleSignOut}>SignOut</button> :
          <NavLink to="/Login" className="btn">SignIn</NavLink> 
         }
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
          
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
