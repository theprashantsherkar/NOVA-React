import Button from "./components/Button";
import React, { useState } from "react"
import Navbar from "./components/Navbar";

//state, props hooks: useState.

export default function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("ABC");
  const [isGood, setIsGood] = useState(true);

  function reset() {
  setCount(0);
}

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-black text-white flex flex-col items-center gap-4 justify-center">
        <div>Count Value: {count}</div>

        <div className="flex gap-4">
          <Button label="increase" func={() => setCount(count + 1)} type={"success"} />
          <Button label={"Reset"} func={reset} type={"warning"} />
          <Button label={"decrease"} func={() => setCount(count - 1)} type={"danger"} />
        </div>
      </div>
    </>

  )
}


//usestate: 1. value 2. method  3. initial value