"use client";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div>
      <section className="flex flex-col gap-2 items-center justify-center bg-white h-[500px]">
        <h1 className="text-6xl font-bold text-center text-black">
          El mejor <br /> e-commerce
        </h1>
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Buscar productos..."
            className="text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="blue" size="md" onClick={handleSearch}>
            Buscar
          </Button>
        </div>
      </section>
      <section>{/* Contenido de la segunda sección */}</section>
    </div>
  );
}
