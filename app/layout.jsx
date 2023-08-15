import React from "react";
import { Header, SplashScreen } from "@/components/globals";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [isShow, setIsShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 2000);
  }, []);
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          {!isShow ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              {children}
            </>
          )}
        </body>
      </html>
    </>
  );
}
