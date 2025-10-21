import { useSearchParams } from "next/navigation";

export default function ItemPage() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("itemId");

  return (
    <section>
      <h1>{itemId}</h1>
    </section>
  );
}
