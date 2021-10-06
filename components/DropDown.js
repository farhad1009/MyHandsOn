import React from 'react'
import { useState } from 'react';

export default function DropDown() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("USD");
    return (
        <>
            <div onClick={toggleTrueFalse} className={`nice-select support_btn support_select ${isToggled ? "open" : ""}`}>
                <span className="current">{isSelect}</span>
                <ul className="list">
                    <li onClick={() => setSelect("USD")} className={`option ${isSelect == "USD" && "selected focus"}`}>USD</li>
                    <li onClick={() => setSelect("EUR")} className={`option ${isSelect == "EUR" && "selected focus"}`}>EUR</li>
                    <li onClick={() => setSelect("JPY")} className={`option ${isSelect == "JPY" && "selected focus"}`}>JPY</li>
                    <li onClick={() => setSelect("BDT")} className={`option ${isSelect == "BDT" && "selected focus"}`}>BDT</li>
                </ul>
            </div>
        </>
    )
}
