interface InputProps {
  label?: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}
export const Input = ({
  label = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  size = "md",
}: InputProps) => {
  const sizeClasses = {
    sm: "w-[172px] h-[37px] rounded-[8px] text-sm",
    md: "w-[255px] h-[37px] rounded-[8px] text-base",
    lg: "w-[350px] h-[37px] rounded-[8px] text-lg",
  };

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-sm font-bold text-black text-left">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...(onChange ? { value, onChange } : { defaultValue: value })}
        className={`border border-gray-800 p-2 text-black ${sizeClasses[size]} ${className}`}
      />
    </div>
  );
};
