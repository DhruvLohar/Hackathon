import React, {useState, useEffect, useRef} from "react";
import styles, { layout } from "../styles";
import Input from "../Input";
import Button from "../Button";
import EmojiPicker from "emoji-picker-react";

import "./createPassword.css";

export default function CreatePassword() {
    const [formData, setFormData] = useState({});
    const [showOTP, setShowOTP] = useState(false);
    const [createPassword, setCreatePassword] = useState(true);
    const [myPass, setMyPass] = useState({});
    let concatedString = ''
    //mapping for boxes

    const [activeBox, setActiveBox] = useState();
    const boxes = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        setShowOTP(true);
    }

    const verifyOTP = (event) => {
        event.preventDefault();
        console.log(event);
        setCreatePassword(true);
    }

    const handleBoxClick = (i) => {
        setActiveBox(i);
    }

    const handleEmoji = (emoji) => {
        let box = boxes[activeBox]
        box.current.innerHTML= emoji.emoji  
        // console.log(activeBox,emoji.unified)
        setMyPass({...myPass, [activeBox]: emoji.unified})
    }

    const handleConcat = () => {
        if(Object.keys(myPass).length == 6){
            for (let key in myPass){
                concatedString = concatedString.concat('', myPass[key])
                console.log(concatedString)
            }
            
        }else{
            console.error("fill in all the values")
        }
    }
    // console.log(myPass);
    return (
        <>
            <section className={`${layout.sectionRow}`}>
                <div className={`content h-screen ${styles.flexCenter} px-5`}>
                    <div className="heading" style={{ flexBasis: "40%" }}>
                        <h1 className="font-title text-center" style={{ fontSize: "3vw" }}>Getting Started</h1>
                        <p className="text-center" style={{ fontSize: "1.1vw" }}>
                            {!createPassword 
                            ? "Enter your email and confirm it to get started."
                            : "It's important to remember this sequence, as the graphical pattern you create won't be visible to you again. We suggest you to store this sequence somewhere safe and easily accessible."
                        }
                        </p>
                    </div>

                    <div className={`${styles.flexCenter}`} style={{ flexBasis: "60%" }}>
                        {!createPassword &&
                            <div className="email-verification">
                                <form onSubmit={handleSubmit} className={`${styles.flexCenter} flex-col`} style={{ marginTop: "4rem" }}>
                                    <Input name="email" />
                                    <Button text="Confirm your email" class="mt-4" />
                                </form>
            
                                <form className={`${styles.flexCenter} flex-col mt-6`} onSubmit={verifyOTP} style={{ visibility: showOTP ? "visible" : "hidden" }}>
                                    <Input name="otp" />
                                    <Button text="Get started" class="mt-4" />
                                </form>
                            </div>
                        }
                        {createPassword && 
                            <div className={`password-creation ${styles.flexCenter}`} style={{ marginTop: "4rem" }}>
                                <div className="input-grid" style={{ marginRight: "4rem" }}>
                                    {boxes.map((item, i) => (
                                        <div
                                        key={i}
                                        className={`emojiHolder ${activeBox == i ? 'active' : ''}`}
                                        onClick={() => handleBoxClick(i)}
                                        ref={item}
                                        >
                                        </div>
                                    ))}
                                    <button onClick={handleConcat}>Generate Password</button>
                                </div>
                                <EmojiPicker onEmojiClick={handleEmoji} />
                            </div>
                        }
                    </div>

                </div>
            </section>
        </>
    )
}