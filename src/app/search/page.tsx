"use client";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Card } from "@/ui/card";
import { useProducts } from "@/hooks/useProducts";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Agregar interfaz para el tipo de producto
interface Product {
  objectID: string;
  Name: string;
  Images: Array<{
    thumbnails: {
      large: {
        url: string;
      };
    };
  }>;
  "Unit cost": number;
}

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const limit = 3;
  const offset = currentPage * limit;

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setSearchQuery(query);
      setInputValue(query);
    } else {
      setSearchQuery("");
      setInputValue("");
    }
    setCurrentPage(0);
  }, [searchParams]);

  const { products, total, isLoading, isError } = useProducts({
    limit,
    offset,
    search: searchQuery,
  });

  const handleSearch = () => {
    if (inputValue.trim()) {
      setSearchQuery(inputValue.trim());
      router.push(`/search?search=${encodeURIComponent(inputValue.trim())}`);
      setCurrentPage(0);
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="xl:min-h-[600px] bg-white flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 items-center justify-center mb-8">
          <h1 className="text-4xl font-bold text-center text-black">
            Búsqueda de productos
          </h1>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Buscar productos..."
              className="text-black"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex gap-2">
              <Button variant="blue" size="md" onClick={handleSearch}>
                Buscar
              </Button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-4">
          {searchQuery && (
            <p className="text-lg text-black text-center">
              {isLoading
                ? "Buscando..."
                : `Resultados para "${searchQuery}" (${total} encontrados)`}
            </p>
          )}
        </div>

        {isError && (
          <div className="text-red-500 text-center py-4">
            Error al cargar los productos. Intenta nuevamente.
          </div>
        )}

        {products.length > 0 && (
          <div className="flex flex-col justify-center items-center gap-12 mb-8 xl:flex-row">
            {products.map((product: Product) => {
              return (
                <Card
                  key={product.objectID}
                  title={product.Name}
                  imageUrl={product.Images[0].thumbnails.large.url}
                  price={product["Unit cost"]}
                  onClick={() => {
                    router.push(`/item/${product.objectID}`);
                  }}
                />
              );
            })}
          </div>
        )}

        {searchQuery && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            {currentPage > 0 ? (
              <Button
                variant="blue"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Anterior
              </Button>
            ) : (
              <div className="w-[172px] h-[37px] rounded-[8px] bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Anterior</span>
              </div>
            )}

            <span className="text-gray-600">
              Página {currentPage + 1} de {totalPages}
            </span>

            {currentPage < totalPages - 1 ? (
              <Button
                variant="blue"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Siguiente
              </Button>
            ) : (
              <div className="w-[172px] h-[37px] rounded-[8px] bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Siguiente</span>
              </div>
            )}
          </div>
        )}

        {searchQuery && !isLoading && products.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No se encontraron productos para &quot;{searchQuery}&quot;
          </div>
        )}

        {!searchQuery && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-xl mb-4">¡Encuentra los productos que buscas!</p>
            <p>
              Escribe algo en el campo de búsqueda para comenzar a explorar
              nuestros productos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
