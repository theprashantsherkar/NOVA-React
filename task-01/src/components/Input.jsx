import React from "react";

export default function Input({ type, placeholder, value, onChange }) {
    return <input type={type} placeholder={placeholder} className=" border-[1px] border-black p-1 rounded-sm"    value={value} onChange={(e)=> onChange(e.target.value)}/>
}