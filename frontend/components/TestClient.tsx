"use client"

import { useState } from "react"

const TestClient = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>カウント増やすでくん</button>
      <p className="text-lg text-red-500">数字{count}</p>
    </div>
  )
}

export default TestClient
