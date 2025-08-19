import * as React from "react";
import classNameMerge from "../../../utils/classNameMerge";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNameMerge(
        "rounded-2xl bg-white shadow-sm ring-1 ring-black/5",
        "p-6 sm:p-7 md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNameMerge("mb-6", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={classNameMerge(
        "text-center text-3xl md:text-4xl font-extrabold tracking-wide text-[var(--brand)]",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNameMerge("space-y-5", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNameMerge("mt-6", className)} {...props} />;
}
