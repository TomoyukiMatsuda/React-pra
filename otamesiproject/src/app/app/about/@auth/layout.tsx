export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>About レイアウト</h1>
      <div>{children}</div>
    </div>
  );
}
