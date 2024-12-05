import Lottie from "lottie-react";
import ball from "../assets/ball.json";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Welcome back!");
      })
      .catch((error) => {
        toast.error(`${error.code}`);
      });
  };

  return (
    <div className="hero my-24 font-poppins">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-2/5">
          <Lottie animationData={ball} />;
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="uppercase text-center font-medium text-3xl">
              Welcome Back
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn mt-3 bg-primary border-primary text-white hover:bg-light hover:border-light">
                Login
              </button>
              <div className="divider">OR</div>
              <button className=" btn bg-base-200 hover:bg-base-100">
                <FcGoogle className="text-2xl" />
                Sign in with Google
              </button>
              <p className="text-sm text-center mt-3">
                Don’t have an account?{" "}
                <Link
                  className="text-primary font-bold hover:underline"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
