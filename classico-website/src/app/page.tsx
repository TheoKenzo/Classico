import Header from "@/components/header";
import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mb-28">
      <Header />
      <main className="max-w-1440px min-h-screen space-y-28">
        <section className="relative">
          <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black from-10%">
            <div className="w-full h-[798px] flex flex-col items-center justify-center space-y-7">
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
              src="/images/background-main-image.jpg"
              width={1920}
              height={1080}
              alt="Background"
            />
          </div>
        </section>

        <section className="flex flex-col gap-12 items-center">
          <h2 className="text-center font-semibold text-3xl">Descubra e viva a música</h2>
          <div className="flex flex-col gap-12">
            <div className="flex flex-row gap-8">
              <div className="flex flex-col gap-3 w-48">
                <Image src="/images/caixaDeSom.svg" alt="Caixa de Som" width={48} height={48} />
                <p className="text-gray-500">A música clássica é aquela que que visa transmitir mensagens e emoções pelo som, majoritariamente.</p>
              </div>
              <div className="flex flex-col gap-3 w-48">
                <Image src="/images/notaMusical.svg" alt="Nota Musical" width={48} height={48} />
                <p className="text-gray-500">Como o foco está no som, a construção melódica e a organização das notas tornam-se fundamentais.</p>
              </div>
              <div className="flex flex-col gap-3 w-48">
                <Image src="/images/estrelas.svg" alt="Estrelas" width={48} height={48} />
                <p className="text-gray-500">A união do conteúdo e da forma fazem da música clássica um dos maiores patrimônios culturais da humanidade.</p>
              </div>
            </div>
            <div className="">
              <Button className="w-96 h-16 bg-transparent outline-1 outline-slate-500">
                Ouvir Mais
              </Button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-12 items-center">
          <h2 className="text-center font-semibold text-3xl">Entenda os instrumentos</h2>
          <div className="w-full flex items-center justify-around">
            <Image
            src="/images/violino.svg"
            alt="Violino"
            width={171}
            height={380}
            />

            <Card className="max-w-[525px] max-h-[240px] p-2">
              <CardBody className="space-y-2">
                <h3 className="font-bold">Violino</h3>
                <p className="text-gray-500 ml-2">O violino é um instrumento musical de cordas que produz som ao serem arrancadas com um arco, possuindo um corpo longo e estreito, e é tocado com um arco feito de crina de cavalo.</p>
              </CardBody>
            </Card>
          </div>

          <div className="w-full flex items-center justify-around">
            <Card className="max-w-[525px] max-h-[240px] p-2">
              <CardBody className="space-y-2">
                <h3 className="font-bold">Piano</h3>
                <p className="text-gray-500 ml-2">O piano é um instrumento musical de teclado que produz sons através da vibração de cordas, geralmente em combinações de três ou mais, e é amplamente utilizado para acompanhar música, improvisar e compor.</p>
              </CardBody>
            </Card>

            <Image
            src="/images/piano.svg"
            alt="Piano"
            width={370}
            height={380}
            />
          </div>

          <div className="w-full flex items-center justify-around">
            <Image
            src="/images/microfone.svg"
            alt="Microfone"
            width={280}
            height={380}
            />

            <Card className="max-w-[525px] max-h-[240px] p-2">
              <CardBody className="space-y-2">
                <h3 className="font-bold">Canto</h3>
                <p className="text-gray-500 ml-2">É caracterizado pela beleza do tom, fluidez do fraseado e virtuosismo técnico, enfatizando a expressão emocional e a habilidade técnica do cantor, com melodias suaves e fluidas, e é uma parte essencial da ópera desde o século XIX.</p>
              </CardBody>
            </Card>
          </div>

          <Button  className="w-[504px] h-16 bg-neutral-950">
            Aprofundar-se nas possibilidades
          </Button>
        </section>

        <section className="flex flex-col gap-12 items-center">
          <h2 className="text-center font-semibold text-3xl">Aprofunde o conhecimento</h2>
          <div className="flex gap-5 items-center">
            <div className="flex flex-col justify-center items-center gap-4 w-72 h-80 outline outline-1 outline-slate-500 p-6 rounded-2xl">
              <Image src="/images/igreja.svg" alt="Igreja" width={40} height={40} />
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold">Canções Medievais</h1>
                <p className="text-center text-slate-500">Tudo o que você precisa saber sobre a boa música da Idade Média e como elas revolucionaram o mundo!</p>
              </div>
              <Button className="w-32 h-9 bg-neutral-950 outline-1 outline-slate-500 rounded-3xl">Saber Mais</Button>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-72 h-80 outline outline-1 outline-slate-500 p-6 rounded-2xl">
              <Image src="/images/notaMusical2.svg" alt="Igreja" width={40} height={40} />
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold">Sonatas musicais</h1>
                <p className="text-center text-slate-500">Você está por dentro de todos os mistérios e lendas por trás das famosas sonatas.</p>
              </div>
              <Button className="w-32 h-9 bg-neutral-950 outline-1 outline-slate-500 rounded-3xl">Saber Mais</Button>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-72 h-80 outline outline-1 outline-slate-500 p-6 rounded-2xl">
              <Image src="/images/foguete.svg" alt="Igreja" width={40} height={40} />
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold">A música e o espaço</h1>
                <p className="text-center text-slate-500">Algumas canções são tão bem elaboradas que acabam infuenciando grandes avanços da humanidade.</p>
              </div>
              <Button className="w-32 h-9 bg-neutral-950 outline-1 outline-slate-500 rounded-3xl">Saber Mais</Button>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-72 h-80 outline outline-1 outline-slate-500 p-6 rounded-2xl">
              <Image src="/images/ouvido.svg" alt="Igreja" width={40} height={40} />
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold">Genialidade surda</h1>
                <p className="text-center text-slate-500">Se você acha que é necessário escutar para sentir a música, você errou. Beethoven compôs belas obras sem escutar-las.</p>
              </div>
              <Button className="w-32 h-9 bg-neutral-950 outline-1 outline-slate-500 rounded-3xl">Saber Mais</Button>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
