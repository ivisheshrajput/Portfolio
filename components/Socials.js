import Link from "next/link";
import {
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
  RiInstagramLine,
  RiFacebookLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"https://www.linkedin.com/in/ivisheshrajput/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/ivisheshrajput"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={
          "mailto:ivisheshrajput@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20there!"
        }
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>
      <Link
        href={"https://www.instagram.com/ivisheshrajput/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
