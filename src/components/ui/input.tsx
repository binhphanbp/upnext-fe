import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export function Input({ className, id, label, name, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <label className="block" htmlFor={inputId}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        {...props}
        className={cn(
          "mt-2 h-11 w-full rounded-lg border border-border bg-white px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-teal-100",
          className,
        )}
        id={inputId}
        name={name}
      />
    </label>
  );
}
