// "use client"; // Nextjs usually makes server component, to tell the Nextjs that this is a client component
// import { useState, useEffect } from "react";
import fs from "fs/promises"; // (in server component only) This will not work in client component
import Navbar from "@/components/Navbar";

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("I am a client component");
  let a = fs.readFile(".gitignore") // (in server component only) This will not work in client component
  a.then((e) => { console.log(e.toString()) }) // (in server component only) This will not work in client component
  return (
    <div>
      <Navbar />
      I am a component 
      {/* {count} */}
      {/* <button className="m-3 p-3 bg-red-600 hover:bg-red-400" onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
}
