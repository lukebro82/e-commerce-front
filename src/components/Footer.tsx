import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="bg-black flex flex-col h-full xl:flex-row xl:justify-between xl:px-4">
        <div className="flex flex-col justify-center gap-3 p-4 text-white h-[200px] w-[134px]">
          <Link href="/login">Ingresar</Link>
          <Link href="/login">Mi perfil</Link>
          <Link href="/login">Buscar</Link>
          <Link href="/login">Logout</Link>
        </div>
        <div className="flex flex-col justify-center gap-3 p-4 text-white h-[200px] w-[134px]">
          <span className="font-bold text-lg">Redes</span>
          <Link href="/login">Twitter</Link>
          <Link href="/login">Instagram</Link>
        </div>
      </div>
      <div className="bg-black h-full">
        <span className="p-4">©2025 apx</span>
      </div>
    </div>
  );
};
