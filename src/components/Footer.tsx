import Link from "next/link";
import Image from "next/image";
import twitterLogo from "../../public/twitter.svg";
import instagramLogo from "../../public/instagram.svg";
export const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="flex flex-col xl:flex-row xl:justify-between xl:px-4">
        <div className="flex flex-col justify-center gap-3 p-4 text-white h-[200px] w-[134px]">
          <Link href="/signin">Ingresar</Link>
          <Link href="/profile">Mi perfil</Link>
          <Link href="/search">Buscar</Link>
          <Link href="/login">Logout</Link>
        </div>
        <div className="flex flex-col justify-center gap-3 p-4 text-white h-[200px] w-[134px]">
          <span className="font-bold text-lg">Redes</span>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={twitterLogo}
              alt="Twitter"
              width={20}
              height={20}
              style={{ height: "auto" }}
            />
            Twitter
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={instagramLogo}
              alt="Instagram"
              width={19}
              height={23}
              className="invert"
              style={{ height: "auto" }}
            />
            Instagram
          </Link>
        </div>
      </div>
      <div className="p-4 text-white">
        <span>©2025 apx</span>
      </div>
    </footer>
  );
};
