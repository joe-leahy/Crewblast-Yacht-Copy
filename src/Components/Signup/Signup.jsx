import React, { useState } from "react";

import PrivacyPolicy from "./PrivacyPolicy";
import WelcomeMessage from "../WelcomeMessage";
import Form from "./Form";

const Signup = () => {
  const [view, setView] = useState("form");

  return (
    <>
      {view === "form" ? (
        <Form setView={setView} />
      ) : view === "pp" ? (
        <PrivacyPolicy setView={setView} />
      ) : view === "welcome" ? (
        <WelcomeMessage />
      ) : null}
    </>
  );
};

export default Signup;
