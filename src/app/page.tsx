import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-leaves flex justify-center items-center fadeInAnimation">
      <div className="bg-black opacity-90 h-screen w-screen absolute"></div>
      <div className="absolute">
        <Image src="/light_w_undertext.svg" alt="Logo" width={"500"} height={"300"} className="h-28 fadeInAnimation" />
      </div>
    </main>
  );
}
