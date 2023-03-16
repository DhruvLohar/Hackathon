import React from "react";
import styles from "./styles";
import metamask from "../assets/metamask.png";

export default function Button(props) {
    return (
        <>
            <button className={`${styles.flexCenter} ${props.class} text-black`} style={{padding: ".8rem 2.5rem", borderRadius: "1.8rem", background: "#3A1078", color: "white"}}>
                {props.icon &&
                    <img src={metamask} alt="metamask icon" style={{ width: "1.8rem", marginRight: "1rem" }} />
                }
                {props.text}
            </button>
        </>
    )
}