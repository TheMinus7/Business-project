import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "CrowdFund",
  description: "Business crowdfunding platform UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
