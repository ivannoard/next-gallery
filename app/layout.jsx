import { Header } from "@/components/globals";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Massnouu's Gallery",
  description: "Personal gallery from Ivan Ardiansyah",
};

export default function RootLayout({ children }) {
  // const { viewTransitionsStatus } = useAnimatedRouter();
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {/* <span>{viewTransitionsStatus}</span> */}
          {children}
        </body>
      </html>
    </>
  );
}
