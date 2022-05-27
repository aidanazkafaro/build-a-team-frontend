import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { ResponsiveNavBar } from "./Navbar";
import { ReactSession } from "react-client-session";
import PlayerTable from "./PlayerTable";

const TeamProfile = ({ isLoggedIn }) => {
  const [hasilGetPlayer, setHasilGetPlayer] = useState(null);

  //console.log(teamProfile);
  useEffect(() => {
    getSession();
    if (ReactSession.get("id_tim") != null) {
      getPlayer();
      // setTimeout(2000);
      ReactSession.set("hasilGetPlayer", hasilGetPlayer);
    }
    console.log("i fire once");
  }, []);

  const getSession = (e) => {
    axios
      .get("http://localhost:8000/login", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(function (response) {
        console.log("GETTING SESSION DATA FROM SERVER");
        console.log(response.data);
        ReactSession.set("username", response.data.username);
        ReactSession.set("user_id", response.data.user_id);
        ReactSession.set("id_tim", response.data.id_tim);
      })
      .catch(function (error) {
        // alert("Can't found your team")
        console.error(error);
      });
  };

  const getPlayer = (e) => {
    axios
      .get("http://localhost:8000/getplayer", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(function (response) {
        console.log("GETTING PLAYER DATA FROM SERVER");
        //PlayerTable(response.data);
        //hasilGetPlayer = response.data;
        setHasilGetPlayer(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // alert("Can't found your team")
        console.error(error);
      });
  };

  if (!hasilGetPlayer || !ReactSession.get("username")) {
    return (
      <>
        <div class="grid place-items-center h-screen">
          <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <ResponsiveNavBar isLoggedIn={isLoggedIn} />
      <div className="w-full text-left h-screen p-10">
        <h1 className="text-bold text-4xl">
          Welcome, {ReactSession.get("username")}!
        </h1>
        <br></br><br></br>

        <div class="grid grid-cols-6 gap-4">

          <div class="col-start-1 col-end-3">
            <div class="flex space-x-2 justify-start">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Tambah Pemain</button>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Show Selected Pemain</button>
            </div>
          </div>

          <div class="col-start-7">
            <div>
              <div class="dropdown relative">
                <button
                  class="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    class="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </button>
                <ul
                  class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Action</a
                    >
                  </li>
                  <li>
                    <a
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flex space-y-2 justify-end">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >Terapkan</button>
        </div>

        <br></br>
        <div>
          <PlayerTable dataTim={hasilGetPlayer} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeamProfile;
