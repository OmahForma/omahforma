import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://omahforma.com"),
  title: "OmahForma Living Studio | Interior Custom Yogyakarta",
  description:
    "Jasa interior custom di Yogyakarta: kitchen set, wardrobe, backdrop TV, partisi, dan furniture built-in. Desain sesuai ruang, produksi sendiri, finishing rapi.",

  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
  other: [
    {
      rel: "android-chrome",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "android-chrome",
      url: "/android-chrome-512x512.png",
    },
  ],
},

  keywords: [
    "interior custom Yogyakarta",
    "kitchen set Yogyakarta",
    "wardrobe custom",
    "backdrop TV",
    "furniture built-in",
    "OmahForma Living Studio",
  ],
  openGraph: {
    title: "OmahForma Living Studio | Interior Custom Yogyakarta",
    description:
      "Kitchen set, wardrobe, backdrop TV, dan interior custom sesuai kebutuhan ruang Anda.",
    url: "https://omahforma.com",
    siteName: "OmahForma Living Studio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/image/hero/hero-kitchen.jpg",
        width: 1600,
        height: 1738,
        alt: "Kitchen set custom OmahForma Living Studio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* ================= META PIXEL ================= */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '264968112135722');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* fallback no-js */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=264968112135722&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}