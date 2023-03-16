import React, { useState } from "react";
import { SHA256 } from "crypto-js";

const salting = () => {
  const [password, setPassword] = useState("");
  const [secPass1, setSecPass1] = useState("");
  const [hash, setHash] = useState("");
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const pass1 = () => {
    let newPass = "";
    for (i = 0; i <= password.length; i++) {
      if (i % 2 === 0) {
        newPass = newPass.concat(password.charAt(i), "%@>");
      } else {
        newPass = newPass.concat(password.charAt(i), "*!`");
      }
    }
    setSecPass1(newPass);
  };
  const handleHash = () => {
    pass1;
    let hash = SHA256(password).toString();
    // console.log(secPass1);
    // console.log(hash);
    setHash(hash);
  };
  return (
    <div>
      <input type="password" value={password} onChange={passwordHandler} />
      <p>{password}</p>
      <button onClick={pass1}> Salting</button>
      <p>{secPass1}</p>
      <button onClick={handleHash}> Generate Hash</button>
      <p>{hash}</p>
    </div>
  );
};

export default salting;
