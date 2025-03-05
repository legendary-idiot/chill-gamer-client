import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const {
    createUserWithEmailPass,
    updateUserData,
    signInWithGoogleAuth,
    error,
    setError,
  } = useContext(AuthContext);

  const formHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    const isValid = passwordRegex.test(password);
    if (!isValid) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long!"
      );
      return;
    }

    createUserWithEmailPass(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        updateUserData(name, photo)
          .then(() => {
            toast.success("Account Created Successfully!");
          })
          .catch((error) => {
            toast.error("Sorry! Something Went Wrong");
            // console.log("Error: ", error);
          });
      })
      .catch((error) => {
        setError(error.code);
        //console.log("Error Code: ", errorCode);
      });
  };

  return (
    <div className="my-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">
          Join the Savings Revolution!
        </h2>
        <p className="text-base w-[90%] sm:w-[70%] mx-auto text-center">
          Creating your account is the first step to enjoying incredible savings
          and a seamless shopping experience with all your favorite brands.
          Don&apos;t miss out—register today and start saving big!
        </p>
      </div>

      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow border border-indigo-200 my-8 mx-auto">
        <form className="card-body space-y-6" onSubmit={formHandler}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn btn-primary w-full">Register</button>
          </div>
          <div>
            <p className="text-base text-center">
              Already have an account? Please{" "}
              <Link
                to="/login"
                className="btn-link text-primary hover:text-blue-600"
              >
                Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={signInWithGoogleAuth}
              type="button"
              className="btn btn-outline w-full text-base"
            >
              <FaGoogle className="text-sm" /> Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
