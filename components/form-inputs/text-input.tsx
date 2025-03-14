import { cn } from "@/lib/utils";

export interface TextInputProps {
  label: string;
  register: any;
  name: any;
  errors: any;
  placeholder?: string;
  type: string;
  className?: string;
}

export default function TextInput({
  label,
  register,
  name,
  errors,
  placeholder,
  type,
  className = "col-span-2",
}: TextInputProps) {
  return (
    <div className={cn("", className)}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...register(`${name}`, { required: true })}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{label} is required</span>
      )}
    </div>
  );
}
