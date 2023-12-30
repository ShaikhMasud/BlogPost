import "../style/globals.css";

export const metadata = {
  title: "Masud's Blog post",
  description: "This is a Blogs website ",
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