import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <main className="max-w-1920px min-h-screen space-y-28">
        <section className="relative">
          <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black from-10%">
            <div className="w-full h-screen flex flex-col items-center justify-center space-y-7">
              <h1 className="text-center font-bold text-4xl max-w-[480px]">Ressonâncias Intemporais: O Mundo Fascinante da Música Clássica</h1>
              <Image
                src="/images/scroll-icon.svg"
                width={27}
                height={38}
                alt="Scroll"
              />
            </div>
          </div>
          <div className="block">
            <Image
              src="/images/background-main-image.svg"
              width={1920}
              height={1080}
              alt="Background"
            />
          </div>
        </section>
        <section>
          <h2 className="text-center font-semibold text-3xl">Descubra e viva a música</h2>
        </section>
      </main>
    </section>
  );
}
