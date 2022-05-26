import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ResponsiveNavBar } from "./Navbar";
import axios from "axios";

//axios.defaults.withCredentials = true

const SignIn = ({ isLoggedIn, setIsLoggedIn }) => {
  const nav = useNavigate();
  const [username, setUsername] = useState("pepguardiola");
  const [password, setPassword] = useState("mancity");
  //const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession();
  //   // ⬇ This calls my get request from the server

  // }, []);

  // const getSession = async (e) => {
  //   //e.preventDefault(); //prevent refresh

  //   axios
  //     .get("http://localhost:8000/login", {headers: {'Content-Type': 'application/json'}, withCredentials: true})
  //     .then(function (response) {
  //       console.log('GETTING SESSION DATA FROM SERVER')
  //       console.log(response.data);
  //       // setTeamProfile(response);
  //     })
  //     .catch(function (error) {
  //       // alert("Can't found your team")
  //       console.error(error);
  //     });
  // };

  const onSubmitForm = async (e) => {
    e.preventDefault(); //prevent refresh

    const body = { username, password };

    axios
      .post(
        "http://localhost:8000/login",
        {
          username: body.username,
          password: body.password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response.data);
        setIsLoggedIn(true);
        nav("/TeamProfile");
      })
      .catch(function (error) {
        alert("Can't find your account.");
        nav("/SignIn");
        console.error(error);
      });
  };
  return (
    <>
      <ResponsiveNavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="h-screen flex bg-gray-bg1 -mt-20">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center uppercase">
            sign in and start composing your team
          </h1>

          <form onSubmit={onSubmitForm}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className={`w-full p-2 text-primary border-2 focus:border-black rounded-md outline-none text-sm transition duration-300 ease-in-out mb-4`}
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`w-full p-2 text-primary border-2 focus:border-black rounded-md outline-none text-sm transition duration-500 ease-in-out mb-4`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                key="SignIn"
                className="no-underline text-white rounded-lg font-semibold  active:bg-gray-500 bg-black py-2 px-4 transition duration-75 ease-in-ou"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignIn;
