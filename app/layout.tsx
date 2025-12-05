import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zixcre8-ai",
  description: "Veo 3 + 3D + Gemini AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
