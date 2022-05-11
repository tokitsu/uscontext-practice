import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuthButton: React.VFC = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return (
    <div>{auth ? <button>ログアウト</button> : <button>ログイン</button>}</div>
  );
};
