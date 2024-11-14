"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="bg-black flex items-center justify-center gap-2 py-3">
        <input
          className="text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="border-2 border-white rounded-sm px-3">ADD</button>
      </div>
      <div></div>
    </>
  );
}
