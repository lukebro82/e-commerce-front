"use client";
import { useUserStore } from "@/store/useUserStore";
import { Button } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const token = useUserStore((state) => state.user.token);
  const email = useUserStore((state) => state.user.email);
  const clearUser = useUserStore((state) => state.clearUser);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    clearUser();
  };

  const handleClickIngresar = () => {
    router.push("/signin");
  };

  return (
    <div className="bg-black h-[84px] flex items-center justify-between px-4 xl:px-10 relative">
      <Link href="/">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={153}
          height={34}
          className="invert"
        />
      </Link>
      <Image
        src="/menu.svg"
        alt="Menu"
        width={52}
        height={40}
        className="invert xl:hidden cursor-pointer"
        style={{ height: "auto" }}
        priority={false}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {token ? (
        <div className="hidden xl:flex xl:flex-col xl:items-center">
          <span className="text-white text-center">{email}</span>
          <a
            className="text-primary-pink-700 text-center w-full cursor-pointer"
            onClick={handleClick}
            href=""
          >
            Cerrar sesión
          </a>
        </div>
      ) : (
        <Button
          variant="pink"
          size="sm"
          className="hidden xl:block"
          onClick={handleClickIngresar}
        >
          Ingresar
        </Button>
      )}

      {isMenuOpen && (
        <div className="xl:hidden fixed top-[84px] left-0 right-0 bottom-0 bg-black z-50 shadow-lg">
          <div className="flex h-full flex-col p-6 gap-10 justify-center items-center">
            {token ? (
              <>
                <Link 
                  href="/profile" 
                  className="text-white text-5xl py-2 hover:text-primary-pink-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mi perfil
                </Link>
                <Link 
                  href="/search" 
                  className="text-white text-5xl py-2 hover:text-primary-pink-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buscar
                </Link>
                <div className="border-t border-gray-700 pt-4 mt-2">
                  <span className="text-white text-sm block mb-2">{email}</span>
                  <a
                    className="text-primary-pink-700 cursor-pointer text-lg"
                    onClick={() => {
                      handleClick();
                      setIsMenuOpen(false);
                    }}
                  >
                    Cerrar sesión
                  </a>
                </div>
              </>
            ) : (
              <>
                <Link 
                  href="/signin" 
                  className="text-white text-5xl py-2 hover:text-primary-pink-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ingresar
                </Link>
                <Link 
                  href="/search" 
                  className="text-white text-5xl py-2 hover:text-primary-pink-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buscar
                </Link>
              </>
            )}
          </div>
        </div>
      )}


    </div>
  );
};
