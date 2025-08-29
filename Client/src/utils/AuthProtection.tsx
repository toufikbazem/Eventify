import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function AuthProtection({ children }: { children: React.ReactNode }) {
  const { currentUser } = useSelector((state: any) => state.user);

  if (!currentUser) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default AuthProtection;
