
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Apostilas de Mecânica Automotiva do Básico ao Avançado | Aprenda Mecânica em Casa',
  description: 'Aprenda mecânica automotiva com apostilas completas em PDF. Conteúdo do básico ao avançado com acesso imediato. Ideal para iniciantes e mecânicos.',
  keywords: 'mecânica automotiva pdf, apostila mecânica automotiva, curso mecânica automotiva pdf, aprender mecânica automotiva, manuais mecânica automotiva',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
