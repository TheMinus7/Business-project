import "./globals.css";
import { Inter } from "next/font/google";
import Header from ".//components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crowdfunding",
  description: "Business crowdfunding project",
};
export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
