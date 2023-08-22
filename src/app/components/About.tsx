import Image from "next/image";
import perfilImg from "/public/assets/home_img.png";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center text-center mt-28 mb-6 md:mb-0"
    >
      <div className="max-w-[1100px] m-auto ">
        <div className="mb-12">
          <h1>Sobre mim</h1>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src={perfilImg}
              alt=""
              width={300}
              height={200}
              className="rounded-md "
            />
          </div>
          <div className="mt-10 px-4 flex flex-col gap-6 items-center container">
            <p className="text-start text-sm md:text-base">
              Desenvolvedor front-end focado em <strong>React.js</strong>.
              Estudante de Sistemas para Internet. Habilidades em{" "}
              <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong>,<strong>TypeScript</strong> e{" "}
              <strong>Next.js</strong>. Apaixonado por criar interfaces
              elegantes e interativas. Comprometido em oferecer experiências de
              usuário excepcionais. Sempre atualizado com as últimas tendências
              e em busca de desafios estimulantes.
            </p>
            <a
              download
              href="/CV.pdf"
              className="mt-6 bg-blue-600 p-2 w-44 text-center font-semibold rounded-3xl border border-transparent hover:bg-[#1f2937] hover:transition-colors hover:border-blue-600"
            >
              Baixar curriculo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
