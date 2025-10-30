"use client";

import { useUserStore } from "@/store/useUserStore";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { useState } from "react";
import { patchUser } from "../../lib/api";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/middleware";

export default function Profile() {
  const [name, setname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setphone] = useState("");
  const token = useUserStore((state) => state.user.token);
  const router = useRouter();

  const handleSubmit = async () => {
    const phoneNumber = Number(phone);

    try {
      await patchUser(name, address, phoneNumber, token);

      Swal.fire({
        title: "Datos enviados exitosamente",
        icon: "success",
        confirmButtonColor: "#4f7cac",
        iconColor: "#4f7cac",
      }).then(() => {
        router.push("/");
      });
    } catch (error) {
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
    <ProtectedRoute>
      <div
        className={` flex flex-col items-center justify-center gap-4 bg-white xl:min-h-[600px]`}
      >
        <h2 className="text-black text-4xl font-bold text-left">Perfil</h2>

        <Input
          label="Nombre Completo"
          type="text"
          className="lg:w-[350px] lg:text-lg"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <Input
          label="Dirección"
          type="text"
          className="lg:w-[350px] lg:text-lg"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          label="Teléfono"
          type="number"
          className="lg:w-[350px] lg:text-lg"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
        <Button
          size="md"
          variant="yellow"
          className="!text-black lg:w-[350px] lg:text-lg"
          onClick={handleSubmit}
        >
          Guardar
        </Button>
      </div>
    </ProtectedRoute>
  );
}
