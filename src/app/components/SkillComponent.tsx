import Image, { StaticImageData } from "next/image";

interface SkillComponentProps {
  image: StaticImageData;
  title: string;
}

export const SkillComponent = ({ image, title }: SkillComponentProps) => {
  return (
    <div className="flex flex-col w-[140px] md:w-[250px] h-auto rounded-lg border-b-2 border-b-blue-600  md:shadow-xl  p-5 hover:scale-110 ease-in duration-300 hover:cursor-pointer">
      <h3 className="text-xl ">{title}</h3>

      <div className="flex flex-col mt-8 gap-4 text-start">
        <div className="m-auto ">
          <Image src={image} width={60} height={80} alt="" />
        </div>
      </div>
    </div>
  );
};
