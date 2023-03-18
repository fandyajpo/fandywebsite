import "./globals.css";

export const metadata = {
  title: "Fanvercel",
  description: "Hello Brodi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
