import Footer from "@/components/footer";
import "../style/globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Meu Portifólio",
  description: "Portifó do Matheus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
