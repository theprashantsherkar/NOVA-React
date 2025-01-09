import { createContext, useState } from "react";

export const TempContext = createContext({name:"Prashant", setName:()=>{}});


export default function TempContextProvider({ children }) {
    const [name, setName] = useState("Prashant");
    
    return (
        <TempContext.Provider value={{name, setName}}>
            {children}
        </TempContext.Provider>
    )
}
