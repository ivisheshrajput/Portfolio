import Socials from "../components/Socials";
import Link from "next/link";
const Header = () => {
  return (
    <header className="z-30 absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <h1 className="text-4xl">
              <span className="font-bold">vishesh&nbsp;</span>rajput
              <span className="text-accent ">.</span>
            </h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
