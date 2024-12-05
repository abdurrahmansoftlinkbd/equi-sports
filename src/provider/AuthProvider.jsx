import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  const authInfo = {
    user,
    loading,
  };

  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default AuthProvider;
