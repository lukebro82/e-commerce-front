import { Button } from "../button";

interface ItemCardProps {
  title: string;
  imageUrl: string;
  price: number;
  description?: string;
}

export const ItemCard = ({
  title,
  imageUrl,
  price,
  description,
}: ItemCardProps) => {
  return (
    <div className="flex flex-col w-[328px] xl:flex-row  xl:justify-center">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-[315px] h-[237px] object-cover xl:w-[808px] xl:h-[384px]"
        />
      </div>

      <div className="flex justify-between flex-col items-start p-2 w-full flex-1 xl:justify-around xl:pl-8">
        <span className="text-black font-bold text-[35px] break-words">
          {title}
        </span>

        <span className="text-black font-extrabold text-[40px] ml-2 flex-shrink-0">
          ${price}
        </span>

        <Button className="bg-primary-light-blue !text-black text-[30px] font-extrabold  rounded w-[328px] h-[63px]">
          Comprar
        </Button>

        <span className="text-black text-[14px] pt-4">{description}</span>
      </div>
    </div>
  );
};
