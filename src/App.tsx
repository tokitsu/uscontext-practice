import "./styles.css";
import React from "react";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h2>useContext</h2>
      </div>
    </AuthProvider>
  );
}
