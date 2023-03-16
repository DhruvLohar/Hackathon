import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line
import { ethers } from "ethers";
// eslint-disable-next-line
import styles, { layout } from "../styles";
import "./landingPage.css";
import TypeIt from 'typeit-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import star from "../../assets/star.png";
import exploreMore from "../../assets/exploreMore.png";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(null);

    const star01 = useRef([]);
    const star02 = useRef([]);

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

    useEffect(() => {
        console.log(star01, star02);
        gsap.timeline({
            scrollTrigger: {
                trigger: ".landing-page",
                start: "top top",
                scrub: true,
            }
        })
            .to(star01.current, {rotate: "360deg"})
            .to(star02.current, {rotate: "-360deg"}, "<0")

        gsap.timeline({
            scrollTrigger: {
                trigger: ".landing-page",
                start: "top 50%",
                scrub: true
            }
        })
            .to('.wl-1', {x: -300})
            .to('.wl-3', {x: -300}, "<0")
    }, []);

    return (
        <>
            <section className={`relative landing-page ${layout.sectionColumn}`}>
                {/* <h1 className="font-outline font-bold" style={{ "fontSize": "5vw", cursor: "pointer" }} onClick={connectToMetamask}>
                    {error 
                        ? error
                        : "Connect to Metamask"
                    }   
                </h1> <br />
                {address && <p style={{ fontSize: "2vw" }}>Wallet Address : {address}</p>} */}
                <h1 className="font-title text-center title-text" style={{ fontSize: "4.4vw" }}>
                    Emoji Powered <br /> Passwords that are <br /> 
                    <TypeIt
                        options={{ loop: true, speed: 100 }}
                        getAfterInit={(instance) => {
                            instance
                                .type("secure.")
                                .pause(1500)
                                .delete()
                                .type("invincible.")
                                .pause(1500)
                                .delete()
                                .type("Unforgettable.")
                                .pause(1500)
                                .delete()
                        }}
                    ></TypeIt>
                </h1>
                <div className="placement absolute" style={{bottom: "2rem"}}>
                    <div className="relative">
                        <img src={exploreMore} className="image-rotate" alt="vector" style={{ width: "8rem" }} />
                        <i class="absolute ri-arrow-down-line" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "1rem" }}></i>
                    </div>
                </div>
                <div className="graphics">
                    <img ref={star01} className="absolute star-1" src={star} alt="star vector" />
                    <img ref={star02} className="absolute star-2" src={star} alt="star vector" />
                </div>
            </section>
            <div className={`animate-words font-outline flex-col ${layout.flexCenter}`} style={{ height: "auto !important" }}>
                <div className="word-line wl-1">
                    <span>Unbreachable</span>
                    <span>Foolproof</span>
                    <span>HackProof</span>
                    <span>Inviolable</span>
                </div>
                <div className="word-line wl-2">
                    <span>simple</span>
                    <span>effortless</span>
                    <span>accessible</span>
                    <span>convenient</span>
                </div>
                <div className="word-line wl-3">
                    <span>Uncomplicated</span>
                    <span>Memorizable</span>
                    <span>Reminiscent</span>
                    <span>Recallable</span>
                </div>
            </div>
            <section className={`relative about-page ${layout.sectionColumn}`}></section>
            <section className={`relative buisness-page ${layout.sectionColumn}`}></section>
            <section className={`relative contact-us-page ${layout.sectionColumn}`}></section>
        </>
    )
}