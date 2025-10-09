import { Button } from "@/ui/button";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-black h-[84px] flex items-center justify-between px-4 xl:px-10">
      <Image src="/Logo.svg" alt="Logo" width={153} height={34} className="invert" />
      <Image
        src="/menu.svg"
        alt="Menu"
        width={52}
        height={40}
        className="invert xl:hidden"
        priority={false}
      />
      <Button variant="pink" size="sm" className="hidden xl:block">
        Ingresar
      </Button>
    </div>
  );
};
