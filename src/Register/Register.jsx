import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Register = () => {
    return (
        <div>
           <Navbar></Navbar>
            <div className="hero ">
         <div className="hero-content flex-col lg:flex-row-reverse">  
           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <form className="card-body">
               <div className="form-control">
               <h1 className="text-3xl">Please Login</h1>
                 <label className="label">
                   <span className="label-text">Name</span>
                 </label>
                 <input
                   type="name"
                   name="name"
                   placeholder="name"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
               
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input
                   type="email"
                   name="email"
                   placeholder="email"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input
                   type="password"
                   name="password"
                   placeholder="password"
                   className="input input-bordered"
                   required
                 />
                 <label className="label">
                   <a href="#" className="label-text-alt link link-hover">
                     Forgot password?
                   </a>
                 </label>
               </div>
               <div className="form-control mt-6">
                 <button className="btn btn-primary">Register</button>
               </div>
               <h3>Allready have an account ? <Link className="text-red-600 font-bold" to="/Login">login</Link> </h3>
             </form>
           </div>
         </div>
       </div>
        </div>
    );
};

export default Register;