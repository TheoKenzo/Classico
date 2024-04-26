import Header from "@/components/header";
import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";

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
        <section>
          <h2 className="text-center font-semibold text-3xl">Entenda os instrumentos</h2>
          <div className="flex items-center justify-around">
            <Image
            src="/images/violino.svg"
            alt="Violino"
            width={171}
            height={380}
            />

            <Card className="max-w-[525px] max-h-[240px]">
              <CardBody className="space-y-2">
                <h3>Violino</h3>
                <p>O violino é um instrumento musical de cordas que produz som ao serem arrancadas com um arco, possuindo um corpo longo e estreito, e é tocado com um arco feito de crina de cavalo.</p>
              </CardBody>
            </Card>
          </div>

          <div className="flex items-center justify-around">
            <Card className="max-w-[525px] max-h-[240px]">
              <CardBody className="space-y-2">
                <h3>Piano</h3>
                <p>O piano é um instrumento musical de teclado que produz sons através da vibração de cordas, geralmente em combinações de três ou mais, e é amplamente utilizado para acompanhar música, improvisar e compor.</p>
              </CardBody>
            </Card>

            <Image
            src="/images/piano.svg"
            alt="Piano"
            width={370}
            height={380}
            />
          </div>

          <div className="flex items-center justify-around">
            <Image
            src="/images/microfone.svg"
            alt="Microfone"
            width={280}
            height={380}
            />

            <Card className="max-w-[525px] max-h-[240px]">
              <CardBody className="space-y-2">
                <h3>Canto</h3>
                <p>É caracterizado pela beleza do tom, fluidez do fraseado e virtuosismo técnico, enfatizando a expressão emocional e a habilidade técnica do cantor, com melodias suaves e fluidas, e é uma parte essencial da ópera desde o século XIX.</p>
              </CardBody>
            </Card>
          </div>

          <Button color="default" className="hidden w-[504px] h-16">
            Aprofundar-se nas possibilidades
          </Button>
        </section>
        <section className="flex flex-col space-y-2">
          <h2 className="text-center font-semibold text-3xl">Aprofunde o conhecimento</h2>
        </section>
      </main>
    </section>
  );
}
