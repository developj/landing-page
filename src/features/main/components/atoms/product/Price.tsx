import classNameMerge from "../../../../../shared/utils/classNameMerge";

export const formatKRW = (v: number) => `${v.toLocaleString("ko-KR")}원`;

export function Price({ value, className }: { value: number; className?: string }) {
  return (
    <strong className={classNameMerge("text-lg tracking-tight text-[var(--text)]", className)}>
      {formatKRW(value)}
    </strong>
  );
}
