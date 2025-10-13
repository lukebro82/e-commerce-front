"use client";
import { useUserStore } from "@/store/useUserStore";
import { Button } from "@/ui/button";
import { clear } from "console";
import Image from "next/image";

export const Header = () => {
  const token = useUserStore((state) => state.user.token);
  const email = useUserStore((state) => state.user.email);
  const clearUser = useUserStore((state) => state.clearUser);

  const handleCLick = () => {
    clearUser();
  };

  return (
    <div className="bg-black h-[84px] flex items-center justify-between px-4 xl:px-10">
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={153}
        height={34}
        className="invert"
      />
      <Image
        src="/menu.svg"
        alt="Menu"
        width={52}
        height={40}
        className="invert xl:hidden"
        priority={false}
      />

      {token ? (
        <div className="hidden xl:flex xl:flex-col xl:items-center">
          <span className="text-white text-center">{email}</span>
          <a
            className="text-primary-pink-700 text-center w-full"
            onClick={handleCLick}
            href="#"
          >
            Cerrar sesión
          </a>
        </div>
      ) : (
        <Button variant="pink" size="sm" className="hidden xl:block">
          Ingresar
        </Button>
      )}
    </div>
  );
};
