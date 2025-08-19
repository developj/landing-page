export function TitleBlock({
  href,
  title,
  subtitle,
}: {
  href?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <a href={href ?? "#"} className="mt-3 block">
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-[var(--text)]">
          {title}
        </h3>
      </a>
      {subtitle && <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>}
    </>
  );
}
