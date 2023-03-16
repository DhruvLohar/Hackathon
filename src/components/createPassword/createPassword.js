import React from "react";
import styles, { layout } from "../styles";

export default function CreatePassword() {
    return (
        <>
            <section className={`${layout.sectionRow}`}>
                <div className="graphics h-screen basis-1/2"></div>
                <div className={`content h-screen basis-1/2 ${styles.flexCenter}`}>
                    <h1>Getting Started</h1>
                    <p></p>
                </div>
            </section>
        </>
    )
}