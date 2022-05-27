import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ResponsiveNavBar } from "./Navbar";
import axios from "axios";

const SignUp = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitFormSignUp = async (e) => {
    e.preventDefault(); //prevent refresh

    const body = { username, password };
    console.log(body)
    axios
      .post("http://localhost:8000/register", {
        username: body.username,
        password: body.password,
      })
      .then(function (response) {
        console.log(response);
        nav("/signin");
      })
      .catch(function (error) {
        alert("Failed to sign up your account.")
        console.error(error);
      });
  };
  return (
    <>
      <ResponsiveNavBar  />

      <div className="h-screen flex bg-gray-bg1 -mt-20">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center uppercase">
            Sign up start building a winning team
          </h1>

          <form onSubmit={onSubmitFormSignUp}>
            <div>
              <label htmlFor="text">Username</label>
              <input
                type="text"
                className={`w-full p-2 text-primary border-2 focus:border-black rounded-md outline-none text-sm transition duration-300 ease-in-out mb-4`}
                id="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`w-full p-2 text-primary border-2 focus:border-black rounded-md outline-none text-sm transition duration-500 ease-in-out mb-4`}
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                key="SignUp"
                className="no-underline text-white rounded-lg font-semibold  active:bg-gray-500 bg-black py-2 px-3 transition duration-75 ease-in-ou"
                href={"CreateTeam"}
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
