import HelloWorld from "@/components/HelloWorld";
import TestClient from "@/components/TestClient";
export default function Home() {
  return (
    <div>
      {/* <Link href="/test">テスト</Link> */}
      <a href="/test.html">html</a>
      <TestClient />
      <HelloWorld />
    </div>
  );
}
