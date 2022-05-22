import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/index'
import SignIn from "./pages/SignInPage";
import './App.css';
import SignUp from "./pages/SignUpPage";
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/SignInPage" element={<SignIn />} />
        <Route path="/SignUpPage" element={<SignUp />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
