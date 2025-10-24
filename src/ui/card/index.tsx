interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
  onClick?: () => void;
}

export const Card = ({ title, imageUrl, price, onClick }: CardProps) => {
  return (
    // Ensure rounded corners clip children so the pink background doesn't overflow
    <div
      onClick={onClick}
      className="flex flex-col border-4 border-black rounded-[8px] w-[315px] h-[321px] overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-[315px] h-[237px] object-cover"
        />
      </div>

      <div className="flex justify-between items-start p-4 bg-primary-pink w-full flex-1">
        {/* Allow title to wrap to multiple lines and truncate if needed */}
        <span className="text-black font-extrabold text-[20px] break-words">
          {title}
        </span>

        <span className="text-black font-extrabold text-[20px] ml-2 flex-shrink-0">
          ${" " + price}
        </span>
      </div>
    </div>
  );
};
