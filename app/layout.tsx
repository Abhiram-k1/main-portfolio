import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kundurthi Abhiram — AI & Data Science",
  description:
    "Portfolio of Kundurthi Abhiram — AI & Data Science undergraduate, AI Club President, and builder of applied ML and IoT systems.",
  keywords: [
    "Kundurthi Abhiram",
    "AI Engineer",
    "Machine Learning",
    "Data Science",
    "Portfolio",
    "Amrita Vishwa Vidyapeetham",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark-carbon" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio-theme-v2');
                  if (!t) {
                    var old = localStorage.getItem('portfolio-theme');
                    t = (old && old !== 'light-sand') ? old : 'dark-carbon';
                    localStorage.setItem('portfolio-theme-v2', t);
                    localStorage.setItem('portfolio-theme', t);
                  }
                  document.documentElement.setAttribute('data-theme', t);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark-carbon');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
