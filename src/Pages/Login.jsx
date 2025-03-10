import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithEmailPass, signInWithGoogleAuth, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailPass(email, password)
      .then((userData) => {
        Swal.fire({
          title: "Logged In Successfully!",
          icon: "success",
        });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          Swal.fire({
            title: "Invalid Credential!",
            icon: "error",
          });
        }
      });
  };

  // Password Reset Handler
  const passwordResetHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    document.getElementById("password-reset-form").classList.add("hidden");
    document.getElementById("confirm-text").classList.remove("hidden");

    resetPassword(email)
      .then(() => {
        location.replace("https://mail.google.com/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log("Error Code: ", errorCode);
        // console.log("Error Message: ", errorMessage);
      });
  };

  return (
    <div className="my-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">
          Welcome Back, Savvy Shopper!
        </h2>
        <p className="text-base w-[90%] sm:w-[70%] mx-auto text-center">
          Login to unlock exclusive savings, personalized deals, and a seamless
          shopping experience across all your favorite brands. Enter your
          details to continue enjoying unbeatable discounts!
        </p>
      </div>

      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow border border-indigo-200 my-8 mx-auto">
        <form className="card-body space-y-6" onSubmit={formHandler}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
            {showPassword ? (
              <FaRegEyeSlash
                title="Hide Password"
                onClick={() => setShowPassword(!showPassword)}
                className="size-5 absolute right-2 top-8"
              />
            ) : (
              <FaRegEye
                title="Show Password"
                onClick={() => setShowPassword(!showPassword)}
                className="size-5 absolute right-2 top-8"
              />
            )}

            <label className="label mt-2">
              <button
                type="button"
                onClick={() =>
                  document.getElementById("password_reset_modal").showModal()
                }
                className="label-text-alt link link-hover text-gray-700"
              >
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary w-full">Login</button>
          </div>
          <div>
            <p className="text-base text-center">
              Don&apos;t have an account? Please{" "}
              <Link
                to="/register"
                className="btn-link text-primary hover:text-blue-600"
              >
                Register
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => {
                signInWithGoogleAuth()
                  .then(() => navigate("/"))
                  .catch((error) => {
                    // console.log(error);
                  });
              }}
              type="button"
              className="btn btn-outline w-full text-base"
            >
              <FaGoogle className="text-sm" /> Google Login
            </button>
          </div>
        </form>
      </div>
      {/* Password Reset Modal */}
      <dialog
        id="password_reset_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Forgot Your Password?</h3>
          <div id="password-reset-form">
            <p className="py-4">
              Please enter your email address. You will receive a link to create
              a new password via email.
            </p>
            <form className="space-y-4" onSubmit={passwordResetHandler}>
              <div className="form-control space-y-2">
                <label className="label">
                  <span className="label-text">Email *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full focus-within:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-primary w-full">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <p className="hidden py-4 text-center" id="confirm-text">
            A password reset link has been sent to your email. You will be
            redirected to your email!
            <br />
            <span className="loading loading-dots loading-lg my-2"></span>
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
