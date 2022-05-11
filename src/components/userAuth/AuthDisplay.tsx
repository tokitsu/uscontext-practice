import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuthDisplay: React.VFC = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      {auth?.userAuth ? <div>ログイン中</div> : <div>ログアウト中</div>}
    </div>
  );
};
