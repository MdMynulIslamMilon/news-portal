import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const handleLogin =e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email =form.get('email');
    const password = form.get('password');
  
    signIn(email,password)
    .then(result =>{
      console.log(result.user)
      .catch(error => console.log(error))
    })
  }
  return (
    <div className="grid items-center justify-center">
      <Navbar></Navbar>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
              <h1 className="text-3xl">Please Login</h1>
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
                <button className="btn btn-primary">Login</button>
              </div>
              <h3>Don,t have an account ? <Link className="text-red-600 font-bold" to="/Register">Register</Link> </h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
