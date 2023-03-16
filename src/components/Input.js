import React from "react";
import styles from "./styles";

export default function Input(props) {
    return (
        <div className="relative input-group">
            {props.icon &&
                <span className={`ri-${props.icon}`}></span>
            }
            <input type="text" className={`${props.class}`} id={props.name} name={props.name} placeholder={`Enter ${props.name}`} />
        </div>
    )
}