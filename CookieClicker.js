import { useState } from "react";
import cat from "./cat-cookie.jpg";

function CookieClicker() {
  const [cookies, setCookies] = useState(0);
  var addCookieInterval = 0;

  const updateCookies = () => {
    switch (true) {
      case cookies < 10:
        addCookieInterval = 1;
        break;
      case cookies < 50:
        addCookieInterval = 5;
        break;
      case cookies < 200:
        addCookieInterval = 50;
        break;
      case cookies < 1000:
        addCookieInterval = 100;
        break;
      case cookies < 5000:
        addCookieInterval = 100;
        break;
    }
    // if (cookies >= 10) addCookieInterval = 2;
    // console.log(addCookieInterval);

    setCookies(cookies + addCookieInterval);
  };

  if (cookies < 5000) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ff837a",
          height: "100vh",
        }}
      >
        <p style={{ fontSize: "50px" }}>Cookies: {cookies}</p>
        <button
          onClick={updateCookies}
          style={{
            width: "20%",
            fontSize: "50px",
            backgroundColor: "#8f534f",
            border: "none",
            textDecoration: "none",
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
            alert("Trying to hit enter eh? Sike b!tch");
          }}
        >
          🍪
        </button>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#7aff9e",
          height: "100vh",
        }}
      >
        <p style={{ fontSize: "48px" }}>Cookies: {cookies}! GG, you won!</p>
        <img
          src={cat}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "30%",
          }}
        ></img>
      </div>
    );
  }
}
