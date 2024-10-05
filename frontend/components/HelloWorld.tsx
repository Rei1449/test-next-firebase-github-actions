"use client"

import { useEffect, useState } from "react";

const HelloWorld = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const testFetch = async () => {
      const res = await fetch("https://geekhack-three-920939054256.asia-northeast1.run.app");
      const data = await res.json();
      console.log(data);
      setMessage(data.Hello);
    }
    testFetch();
  })
  return <div>{message}</div>;
}

export default HelloWorld;
