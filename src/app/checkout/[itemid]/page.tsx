"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { getOrder } from "@/lib/api";
import { useUserStore } from "@/store/useUserStore";
import { useRouter, useSearchParams } from "next/navigation";

export default function ItemPage() {
  const params = useParams();
  const token = useUserStore((state) => state.user?.token);
  const itemid = params.itemid as string;
  const router = useRouter();

  useEffect(() => {
    const fetchOrder = async () => {
      if (!token) {
        return;
      }

      try {
        const res = await getOrder(itemid, token);

        const url = res.res.mercadoPagoURL;

        if (url) {
          router.push(url);
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [itemid, token]);

  return <div>Cargando orden...</div>;
}
