import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-end items-center gap-24 my-4 bg-base-100">
       
        <div className="list-none gap-4 flex ml-24">
         <li><NavLink to="/">Home</NavLink> </li>
         <li><NavLink to="/About">About</NavLink> </li>
         <li><NavLink to="/Carrier">Carrier</NavLink> </li>
         <li><NavLink to="/Login">LogIn</NavLink> </li>
        </div>
        <div className="flex gap-4">
          <a className="btn">Button</a>
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
