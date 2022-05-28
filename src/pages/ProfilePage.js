
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import { ResponsiveNavBar } from "../components/Navbar";
import { ReactSession } from 'react-client-session';

const ProfilePage = () => {


  // useEffect(() => {
  //   //getSession();
  //   // ⬇ This calls my get request from the server
  //   getTeamProfile();
  //   console.log("i fire once")
  // }, []);

  // const getTeamProfile = async (e) => {
  //   //e.preventDefault(); //prevent refresh

  //   axios
  //     .get("http://localhost:8000/getteam", {headers: {'Content-Type': 'application/json'}, withCredentials: true})
  //     .then(function (response) {
  //       console.log('GET TEAMMM')
  //       console.log(response.data);
  //       setTeamProfile(response.data);
  //     })
  //     .catch(function (error) {
  //       alert("Can't found your team")
  //       console.error(error);
  //     });
  // };

  // const getSession = async (e) => {
  //   //e.preventDefault(); //prevent refresh

  //   axios
  //     .get("http://localhost:8000/login", {headers: {'Content-Type': 'application/json'}, withCredentials: true})
  //     .then(function (response) {
  //       console.log('GETTING SESSION DATA FROM SERVER')
  //       console.log(response.data);
        
  //     })
  //     .catch(function (error) {
  //       // alert("Can't found your team")
  //       console.error(error);
  //     });
  // };

  // redirect ke index apabila ada user belum login 
  // yang ingin akses profile page
  if (!ReactSession.get("userLoggedIn")) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <ResponsiveNavBar  />
      
      <Footer />

    </>
  );
};
export default ProfilePage;