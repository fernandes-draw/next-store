import { cn } from "@/lib/utils";

export interface TextareaInputProps {
  label: string;
  register: any;
  name: any;
  errors: any;
  placeholder?: string;
  className?: string;
}

export default function TextareaInput({
  label,
  register,
  name,
  errors,
  placeholder,
  className = "col-span-2",
}: TextareaInputProps) {
  return (
    <div className={cn("", className)}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={"description"}
        rows={4}
        {...register(`${name}`, { required: true })}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
      {errors[name] && (
        <span className="text-red-500 text-sm">{label} is required</span>
      )}
    </div>
  );
}
