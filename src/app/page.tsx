import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-leaves flex justify-center items-center">
      <div className="bg-black opacity-30 h-screen w-screen absolute"></div>
      <div className="absolute">
        <img src="/light_w_undertext.svg" className="h-28" />
      </div>
    </main>
  );
}
