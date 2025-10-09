import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-2 items-center justify-center bg-white h-[500px]">
        <h1 className="text-6xl font-bold text-center text-black">
          El mejor <br /> e-commerce
        </h1>
        <div className="flex flex-col gap-2">
          <Input placeholder="Buscar..." className="text-black" />
          <Button variant="blue" size="md">
            Buscar
          </Button>
        </div>
      </section>
      <section>{/* Contenido de la segunda sección */}</section>
    </div>
  );
}
