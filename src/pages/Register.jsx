import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Welcome to EquiSports");
      })
      .catch((error) => {
        toast.error(`${error.code}`);
      });
    form.reset();
  };

  return (
    <div className="hero-content font-poppins my-24 flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center text-2xl font-bold">Create an account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photourl"
              placeholder="Photo URL"
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
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary border-primary hover:bg-light hover:border-light text-white">
              Register
            </button>
            <div className="divider">OR</div>
            <button className="btn bg-base-200 hover:bg-base-100">
              <FcGoogle className="text-2xl" /> Signup with Google
            </button>
            <p className="text-sm text-center mt-4">
              Already Have An Account?{" "}
              <Link
                className="text-primary font-bold hover:underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
