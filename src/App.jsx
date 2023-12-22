import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "antd";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const googleLogin = useGoogleLogin({
    onSuccess: async (googleUser) => {
      console.log("googleUser", googleUser);
      try {
        const data = await axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${googleUser.access_token}` },
          })
          .then((res) => {
            console.log("res", res);
          });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return <Button onClick={() => googleLogin()}> Login by Google</Button>;
}

export default App;
