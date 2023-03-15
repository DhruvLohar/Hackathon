import React from "react";
import styles from "./styles";
import metamask from "../assets/metamask.png";

export default function Button(props) {
    return (
        <>
            <button className={`${styles.flexCenter} text-black`} style={{padding: ".8rem 2.5rem", borderRadius: "1.8rem", border: "1px solid #252525"}}>
                {props.icon &&
                    <img src={metamask} alt="metamask icon" style={{ width: "1.8rem", marginRight: "1rem" }} />
                }
                {props.text}
            </button>
        </>
    )
}