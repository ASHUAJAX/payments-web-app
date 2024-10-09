// src/app/layout.tsx
import './globals.scss';  // Import your global styles
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],          // Load the Latin subset
  weight: ['400', '700'],     // Load available weights (400 for regular, 700 for bold)
  display: 'swap',             // Prevent FOUT (Flash of Unstyled Text)
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
