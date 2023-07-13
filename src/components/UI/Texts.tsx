export function MainHeading({ children }: { children: React.ReactNode }) {
  return <h1 className="font-extrabold text-sm lg:text-2xl">{children}</h1>;
}

export function LargeHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-extrabold text-xl lg:text-3xl">{children}</h2>;
}

export function SmallHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-extrabold text-lg">{children}</h2>;
}

export function DetailsList({
  details,
}: {
  details: { title: string; body: string }[];
}) {
  return (
    <ul className="space-y-2">
      {details.map((detail) => (
        <li key={detail.title}>
          <span className="font-semibold">{detail.title}:</span> {detail.body}
        </li>
      ))}
    </ul>
  );
}
