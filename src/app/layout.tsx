
import './globals.scss';  
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],          // Load the Latin subset
  weight: ['400','500', '700','900'],     // Load available weights (400 for regular, 700 for bold)
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
