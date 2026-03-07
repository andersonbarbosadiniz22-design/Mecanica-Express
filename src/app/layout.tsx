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
    images: [
      {
        url: 'https://scontent.fcpq10-1.fna.fbcdn.net/v/t39.30808-6/647142877_891433003694899_9082168271198037832_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=snKdicqYEeIQ7kNvwHd9V9N&_nc_ohc=snKdicqYEeIQ7kNvwHd9V9N&_nc_oc=AdlPdlX5r_FbSi_lA1uErEyqEHc8ue2YbiTDAZEsXVdOOMQfXg6Ki_QzDq2UQtrfEpmhh5kIvWqUE1ziFEpw4dgx&_nc_zt=23&_nc_ht=scontent.fcpq10-1.fna&_nc_gid=zTCr9LeoZARsy4Q6YQQAQA&_nc_ss=8&oh=00_Afw_XC6e7OEWHg3LyF7-ra-E1n56q0OBWH0-E31nG7QDTA&oe=69B10FFC',
        width: 1200,
        height: 630,
        alt: 'Mecânica Express - Apostilas em PDF',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacote de Apostilas de Mecânica Automotiva',
    description: 'Domine a mecânica de carros com material técnico em PDF.',
    images: ['https://scontent.fcpq10-1.fna.fbcdn.net/v/t39.30808-6/647142877_891433003694899_9082168271198037832_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=snKdicqYEeIQ7kNvwHd9V9N&_nc_ohc=snKdicqYEeIQ7kNvwHd9V9N&_nc_oc=AdlPdlX5r_FbSi_lA1uErEyqEHc8ue2YbiTDAZEsXVdOOMQfXg6Ki_QzDq2UQtrfEpmhh5kIvWqUE1ziFEpw4dgx&_nc_zt=23&_nc_ht=scontent.fcpq10-1.fna&_nc_gid=zTCr9LeoZARsy4Q6YQQAQA&_nc_ss=8&oh=00_Afw_XC6e7OEWHg3LyF7-ra-E1n56q0OBWH0-E31nG7QDTA&oe=69B10FFC'],
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
