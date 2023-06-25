export default function RootLayout({
  children,
  auth,
  noAuth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
  noAuth: React.ReactNode;
}) {
  return (
    <div>
      <h1>About レイアウト</h1>
      <div>{children}</div>
      <div>{auth}</div>
      <div>{noAuth}</div>
    </div>
  );
}
