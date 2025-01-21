import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";




import "./globals.css";
import { ThemeProvider } from "next-themes";

// Fonts
const interFont = Inter({ subsets: ["latin"] });
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});


export const metadata: Metadata = {
  title: "shopping",
  description: "shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
             <body className={`${interFont.className} ${barlowFont.variable}`}>
<ThemeProvider
          attribute='class'
          defaultTheme="system"
          enableSystem
          // storageKey="theme"
          disableTransitionOnChange

        > {children}</ThemeProvider>
       
      </body>
    </html>
  );
}
