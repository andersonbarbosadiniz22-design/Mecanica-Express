
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
  title: 'Apostilas de Mecânica Automotiva | Básico ao Avançado',
  description: 'Domine mecânica automotiva com material profissional em PDF. Conteúdo prático, acesso imediato e certificado. De R$97 por apenas R$24,90.',
  keywords: 'mecânica automotiva, curso de mecânica pdf, apostila mecânica, aprender mecânica, manutenção automotiva',
  openGraph: {
    title: 'Apostilas de Mecânica Automotiva do Básico ao Avançado',
    description: 'Aprenda mecânica em casa com conteúdo completo e profissional.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mecanicaexpress.com.br',
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
