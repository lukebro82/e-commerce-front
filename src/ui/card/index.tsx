interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
}

export const Card = ({ title, imageUrl, price }: CardProps) => {
  return (
    <div className="flex flex-col border-2 border-black rounded-md w-[315px] h-[337px] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-[315px] h-[237px] object-cover"
      />
      <div className="flex flex-row bg-primary-pink w-full h-full justify-between items-center px-4">
        <span className="text-black font-extrabold text-[20px]">{title}</span>
        <span className="text-black font-extrabold text-[20px]">${price}</span>
      </div>
    </div>
  );
};
