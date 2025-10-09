interface ButtonProps {
  variant?: "blue" | "yellow" | "pink";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  variant = "blue",
  size = "md",
  children,
  onClick,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "font-bold rounded-lg transition-all duration-200 ease-in-out cursor-pointer focus:outline-none";

  const variantClasses = {
    blue: "bg-primary-blue text-white hover:bg-primary-blue-700",
    yellow: "bg-primary-yellow text-white hover:bg-primary-yellow-700",
    pink: "bg-primary-pink text-white hover:bg-primary-pink-700",
  };

  const sizeClasses = {
    sm: "w-[172px] h-[37px] rounded-[8px] text-sm",
    md: "w-[255px] h-[37px] rounded-[8px] text-base",
    lg: "w-[350px] h-[37px] rounded-[8px] text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
