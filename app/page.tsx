import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <p className="text-4xl text-green-600">TranzGOO HomePage</p>
      </div>
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <Link href="/app">
          <button className="font-bold bg-green-300 hover:bg-green-600 py-2 w-40 rounded-2xl mt-5">
            Launch App
          </button>
        </Link>
      </div>
    </main>
  );
}
