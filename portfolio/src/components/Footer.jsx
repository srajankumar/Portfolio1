import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 shadow-2xl backdrop-blur-md body-font">
        <div className="shadow-2xl px-5">
          <div className=" mx-auto py-4 px-5 flex flex-wrap justify-center sm:flex-row">
            <Link
              href="https://github.com/TejasNayak42"
              className="text-white transition duration-300 ml-1 hover:text-black"
              rel="noopener noreferrer"
              target="_blank"
            >
              🎋TejasNayak42🎋
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

// export default Footer;
// const Footer = () => {
//   return (
//     <footer className=" absolute bottom-0 left-0 right-0  mx-auto font-gothamL py-3 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
//       <div className="flex items-center text-white">
//         TejasNayak42's Web Wizardry
//       </div>
//     </footer>
//   );
// };

export default Footer;
