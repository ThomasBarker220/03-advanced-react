import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div>
      <button className="btn" onClick={toggleAlert}>
        {showAlert ? "Toggle Off" : "Toggle On"}
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return (
    <div className="alert alert-danger">
      <h2>You toggled me on!</h2>
    </div>
  );
};

export default ToggleChallenge;
