 import "./globals.css";
 import localFont from 'next/font/local';

const overpass = localFont({
  src: '../public/fonts/Overpass-Medium.ttf',
  display: 'swap',
  variable: '--font-overpass', // CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${overpass.variable} font-sans`}>
      <body>
        {children}
      </body>
    </html>
  );
}
