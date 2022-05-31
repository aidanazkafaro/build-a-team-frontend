import React from "react";
import { Link } from "react-router-dom";

export default function HeroArea() {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546717003-caee5f93a9db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-bold text-5xl">
                    Build A Winning Team.
                  </h1>
                  <p className="mt-4 text-lg font-light text-white">
                    Build "A" Team lets you arrange and organize your Football
                    Team to achieve the maximum potential.
                  </p>
                  <Link
                    to="/SignIn"
                    className="text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black"
                  >
                    <button
                      className="mt-10 bg-white text-black active:bg-gray-400 text-sm font-bold uppercase px-4 py-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}
