"use client";

import { useState, useEffect } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { sendAuthEmail, sendCodeGetToken } from "@/app/lib/api";
import Swal from "sweetalert2";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";

export default function Ingresar() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const setToken = useUserStore((state) => state.setToken);
  const setEmailStore = useUserStore((state) => state.setEmail);
  const token = useUserStore((state) => state.user.token);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

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

      setSend(true);
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
  const handleSubmitCode = async () => {
    if (!code) {
      Swal.fire({
        title: "Error",
        text: "Por favor ingresa tu código",
        icon: "error",
        confirmButtonColor: "#4f7cac",
        iconColor: "#4f7cac",
      });
      return;
    }

    try {
      const data = await sendCodeGetToken(email, Number(code)); // Envia el código como número
      setToken(data.token);
      setEmailStore(email);
    } catch (error) {
      console.error("Error al acceder:", error);
      Swal.fire({
        title: "Error",
        text: "Error al acceder",
        icon: "error",
        confirmButtonColor: "#4f7cac",
        iconColor: "#4f7cac",
      });
    }
  };

  return (
    <div
      className={` flex flex-col items-center justify-center bg-white h-[500px]`}
    >
      <div className={`${send ? "" : "hidden"} flex flex-col gap-6`}>
        <h1 className={` text-6xl font-bold text-center text-black`}>Código</h1>

        <div className="flex flex-col gap-5">
          <Input
            placeholder="Tu código..."
            type="text"
            className="text-black"
            label="Te envíamos un código a tu mail"
            value={code}
            onChange={(e) => setCode(e.target.value)} // Cambiado a string
          />
          <Button
            variant="yellow"
            size="md"
            className="!text-black"
            onClick={handleSubmitCode}
          >
            Ingresar
          </Button>
        </div>
      </div>
      <div className={`${send ? "hidden" : ""} flex flex-col gap-6`}>
        <h1 className={` text-6xl font-bold text-center text-black`}>
          Ingresar
        </h1>

        <div className="flex flex-col gap-5">
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
    </div>
  );
}
