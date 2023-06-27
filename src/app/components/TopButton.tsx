import { AiOutlineArrowUp } from "react-icons/ai";

export const TopButton = () => {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-blue-600 flex justify-center items-center hover:bg-blue-900 hover:transition-colors"
    >
      <AiOutlineArrowUp color="white" size={28} />
    </button>
  );
};
