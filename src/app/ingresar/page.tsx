"use client";

import { useState } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { sendAuthEmail } from "@/app/lib/api";
import Swal from "sweetalert2";

export default function Ingresar() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      Swal.fire({
        title: "Error",
        text: "Por favor ingresa tu email",
        icon: "error",
        confirmButtonColor: "#4f7cac",
        iconColor: "#4f7cac",
      });
      return;
    }

    setLoading(true);
    try {
      const data = await sendAuthEmail(email);
      console.log("Respuesta de la API:", data);

      Swal.fire({
        title: "Email enviado exitosamente",
        icon: "success",
        confirmButtonColor: "#4f7cac",
        iconColor: "#4f7cac",
      });
    } catch (error) {
      console.error("Error al enviar email:", error);
      Swal.fire({
        title: "Error",
        text: "Error al enviar el email",
        icon: "error",
        confirmButtonColor: "#4f7cac",
        iconColor: "#4f7cac",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center bg-white h-[500px]">
      <h1 className="text-6xl font-bold text-center text-black">Ingresar</h1>

      <div className="flex flex-col gap-2">
        <Input
          placeholder="Email..."
          type="email"
          className="text-black"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="yellow"
          size="md"
          className="!text-black"
          onClick={handleSubmit}
        >
          {loading ? "Enviando..." : "Continuar"}
        </Button>
      </div>
    </div>
  );
}