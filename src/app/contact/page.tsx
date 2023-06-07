import Image from "next/image";
import ContactImage from "/public/contact.jpg";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export default function Contact() {
  return (
    <div
      id="contato"
      className="w-full flex flex-col justify-center  text-center mt-10"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h1>Contato</h1>

        <div className="flex flex-col  md:grid md:grid-cols-2 mt-12">
          <Image src={ContactImage} className="rounded-lg" alt="" />
          <div className="flex flex-col items-center justify-center mt-10 md:mt-0">
            <div className="w-[250px] flex items-center  mb-12">
              <BsTelephone size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Telefone</p>
                <p>(99) 99152-9825</p>
              </div>
            </div>
            <div className="w-[250px] flex items-center  mb-12">
              <FiMail size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Email</p>
                <p>winksousa0@gmail.com</p>
              </div>
            </div>
            <div className="w-[250px] flex items-center  ">
              <GoLocation size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Localização</p>
                <p>Brasil - Açailandia, Maranhão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
