import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-sand flex justify-center items-center">
      {/* <div className="bg-sand opacity-90 h-screen w-screen absolute"></div> */}
      <div className="absolute">
        <Image src="/dark_w_undertext.svg" alt="Logo" width={"400"} height={"250"} className="sm:h-20 h-14" />
      </div>
    </main>
  );
}
