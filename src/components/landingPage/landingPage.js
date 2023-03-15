import React, { useState } from "react";
// eslint-disable-next-line
import { ethers } from "ethers";
// eslint-disable-next-line
import styles, { layout } from "../styles";

export default function LandingPage() {
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(null);

    const connectToMetamask = () => {
        if (window.ethereum) {
            window.ethereum.request({method: "eth_requestAccounts"})
            .then((resp) => {
                setAddress(resp[0])
            })
            .catch((err) => {
                if (error.code === -32002) {
                    console.log("Try logging into your metamask manually though the installed plugin and try again later.")
                }
            })
        } else {
            setError("Metamask is unavailable.")
        }
    }

    return (
        <>
            <section className={`${layout.sectionColumn}`}>
                <h1 className="font-outline font-bold" style={{ "fontSize": "5vw", cursor: "pointer" }} onClick={connectToMetamask}>
                    {error 
                        ? error
                        : "Connect to Metamask"
                    }   
                </h1> <br />
                {address && <p style={{ fontSize: "2vw" }}>Wallet Address : {address}</p>}
            </section>
        </>
    )
}