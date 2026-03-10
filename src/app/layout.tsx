import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Arte Transfer | Personalizados: Canecas, Camisetas e Brindes",
  description: "Personalize canecas, camisetas, bonés e sacolas com a Arte Transfer. Qualidade profissional, estampa de alta definição e entrega rápida. Peça seu orçamento!",
  keywords: "canecas personalizadas, camisetas personalizadas, brindes corporativos, sacolas personalizadas, tags para roupas, estamparia, transfer, sublimação",
  authors: [{ name: "Arte Transfer" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
