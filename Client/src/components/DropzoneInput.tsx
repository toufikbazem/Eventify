import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils"; // Shadcn helper (if you have it)

interface DropzoneInputProps {
  value: File[];
  onChange: (files: File[]) => void;
  error?: string;
}

export function DropzoneInput({ value, onChange, error }: DropzoneInputProps) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      onChange(acceptedFiles); // update react-hook-form
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "flex items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer",
          error ? "border-red-500" : "border-gray-400"
        )}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-500">
          Drag & drop images here, or click to select
        </p>
      </div>

      {/* Preview */}
      {value?.length > 0 && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {value.map((file) => (
            <img
              key={file.name}
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-24 h-24 object-cover rounded-md"
            />
          ))}
        </div>
      )}

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}
