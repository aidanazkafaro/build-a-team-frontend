import React from "react";

const SignUp = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };
  return (
    <div className="h-screen flex bg-gray-bg1 -mt-20">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center uppercase">
          Sign up start building a winning team
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Username</label>
            <input
              type="username"
              className={`w-full p-2 text-primary border-2 focus:border-black rounded-md outline-none text-sm transition duration-300 ease-in-out mb-4`}
              id="username"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border-2 focus:border-black rounded-md outline-none text-sm transition duration-300 ease-in-out mb-4`}
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border-2 focus:border-black rounded-md outline-none text-sm transition duration-500 ease-in-out mb-4`}
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
          <a
              key="SignUp"
              className="no-underline text-white rounded-lg font-semibold  active:bg-gray-500 bg-black py-2 px-3 transition duration-75 ease-in-ou"
              href={"CreateTeam"}
            >
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
