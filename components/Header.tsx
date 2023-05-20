import Image from "next/image";
import Toggle from "./Toggle";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const navbar = [
    { idx: 1, menu: "Home", path: "/" },
    { idx: 2, menu: "Project", path: "/project" },
    { idx: 3, menu: "Vision", path: "/vision" },
    { idx: 4, menu: "Contack", path: "/contack" },
  ];
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={"/image/sunny.jpg"}
            width={40}
            height={40}
            alt="logo"
            className="rounded-full"
          />
          <span className="ml-3 text-xl">Serin-B</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navbar.map((el) => (
            <Link
              key={el.idx}
              href={el.path}
              className={`mr-5 hover:text-l-yellow ${
                router.pathname === el.path ||
                (el.path !== "/" && router.pathname.includes(el.path))
                  ? "text-l-yellow font-medium border-b-2 border-l-yellow"
                  : "text-l-brown"
              }`}
            >
              {el.menu}
            </Link>
          ))}
        </nav>
        {/* <Toggle /> */}
      </div>
    </header>
  );
}
