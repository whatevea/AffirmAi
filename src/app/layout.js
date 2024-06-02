import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
const inter = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

export const metadata = {
  title: "AffirmAI | Craft Your Affirmation Yourself",
  description: "AffirmAI is a free, open-source tool that allows you to craft your affirmation yourself.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          // defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
