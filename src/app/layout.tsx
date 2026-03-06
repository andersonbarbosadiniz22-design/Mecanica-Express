
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const viewport: Viewport = {
  themeColor: '#C40000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Pacote de Apostilas de Mecânica Automotiva | PDF Completo',
  description: 'Aprenda mecânica automotiva do básico ao avançado com nosso material profissional em PDF. Domine motores, elétrica e injeção. De R$97 por R$24,90.',
  keywords: 'mecânica automotiva, curso mecânica pdf, apostila mecânica, manutenção de carros, injeção eletrônica',
  authors: [{ name: 'Mecânica Express' }],
  openGraph: {
    title: 'Apostilas de Mecânica Automotiva - Básico ao Avançado',
    description: 'Material técnico profissional ilustrado para iniciantes e especialistas.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mecanicaexpress.com.br',
    siteName: 'Mecânica Express',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacote de Apostilas de Mecânica Automotiva',
    description: 'Domine a mecânica de carros com material técnico em PDF.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
