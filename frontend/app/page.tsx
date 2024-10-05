import HelloWorld from "@/components/HelloWorld";
import TestClient from "@/components/TestClient";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <Link href="/test">テスト</Link> */}
      <Link href="/test.html">html</Link>
      <TestClient />
      <HelloWorld />
    </div>
  );
}
