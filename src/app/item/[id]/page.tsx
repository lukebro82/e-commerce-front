"use client";
import { useItem } from "@/hooks/useItem";
import { ItemCard } from "@/ui/itemCard";
import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ItemPage({ params }: Props) {
  const { id } = React.use(params);
  const { item, isLoading, isError } = useItem({ search: id });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading item</div>;

  return (
    <section className="bg-white flex flex-col items-center justify-center p-18">
      <ItemCard
        title={item?.res.title}
        imageUrl={item?.res.images}
        price={item?.res.price}
        description={item?.res.description}
      ></ItemCard>
    </section>
  );
}
