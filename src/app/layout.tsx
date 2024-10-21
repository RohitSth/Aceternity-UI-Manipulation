import type { Metadata } from "next";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/background/aurora-background";
import { ThemeSwitcher } from "@/components/layouts/ThemeToggler/ThemeSwitcher";
import { ThemeProvider } from "next-themes";
// import Navbar from "@/components/layouts/navbar/NavMenu";
import FloatingDockInvertedComponent from "@/components/layouts/dock/FloatingDockInverted";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuroraBackground>
            <div className="z-10 w-full px-16">
              {/* <Navbar className="top-2" /> */}
              <div className="w-full justify-start">
                <div className="-ml-4">
                  <FloatingDockInvertedComponent />
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <ThemeSwitcher />
              </div>
              {children}
            </div>
          </AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
