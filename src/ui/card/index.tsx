interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
}

export const Card = ({ title, imageUrl, price }: CardProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzE1IiBoZWlnaHQ9IjIzNyIgdmlld0JveD0iMCAwIDMxNSAyMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTUiIGhlaWdodD0iMjM3IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTcuNSAxMTguNUwxNDAgMTQxTDEzNSAxMzZMMTI3IDE0NEwxMjAgMTM3TDEwNSAxNTJIMjEwTDE5NSAxMzcsTDE4OCAxNDRMMTgwIDEzNkwxNzUgMTQxTDE1Ny41IDExOC41WiIgZmlsbD0iIzlDQTNBRiIvPgo8Y2lyY2xlIGN4PSIxNTcuNSIgY3k9IjEwOCIgcj0iMjAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+";
  };

  return (
    <div className="flex flex-col border-2 border-black rounded-md w-[315px] h-[337px] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-[315px] h-[237px] object-cover"
        onError={handleImageError}
      />
      <div className="flex flex-row bg-primary-pink w-full h-full justify-between items-center px-4">
        <span className="text-black font-extrabold text-[20px]">{title}</span>
        <span className="text-black font-extrabold text-[20px]">${price}</span>
      </div>
    </div>
  );
};
