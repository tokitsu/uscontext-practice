import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuthButton: React.VFC = () => {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth?.setUserAuth(false);
  };

  const handleLogin = () => {
    auth?.setUserAuth(true);
  };
  console.log(auth);
  return (
    <div>
      {auth?.userAuth ? (
        <button onClick={handleLogout}>ログアウト</button>
      ) : (
        <button onClick={handleLogin}>ログイン</button>
      )}
    </div>
  );
};
