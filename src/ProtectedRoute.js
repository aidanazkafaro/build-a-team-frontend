import { Navigate } from "react-router-dom";
import { ReactSession } from 'react-client-session';

const ProtectedRoute = ({ children }) => {
  if (!ReactSession.get("userLoggedIn")) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;
