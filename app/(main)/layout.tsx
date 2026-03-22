import { APP_ID, IS_WAITLIST_ENABLED, THEME } from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import { ThemeProvider } from "@/providers/theme_provider";
import "@/global.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jasprcodess.github.io/cutiq-site";
const TITLE = "CutIQ | Download Today";
const OG_TITLE = "CutIQ — AI Hair Analysis & Hairstyle Preview for iPhone";
const DESCRIPTION =
  "Analyze your hair health with AI, preview hairstyles on your face, and get a personalized care routine. Free on the App Store.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "CutIQ",
    locale: "en_US",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "CutIQ app showing AI hairstyle preview on an iPhone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-preview.png",
        alt: "CutIQ app showing AI hairstyle preview on an iPhone",
      },
    ],
  },
  other: {
    "application-name": "CutIQ",
    "apple-mobile-web-app-title": "CutIQ",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={THEME}>
      <head>
        {!IS_WAITLIST_ENABLED && (
          <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        )}

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          <Navbar
            icon={<AppIcon src="/cutiq/app-icon-solid.png" mask />}
            appName="CutIQ"
            links={[
              { label: "Features", href: "#features" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
            action={<DownloadActionButton />}
          />

          {children}

          <CompactFooter
            appIcon={
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <AppIcon src="/cutiq/app-icon-solid.png" mask />
                <span style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "-0.01em" }}>CutIQ</span>
              </span>
            }
            links={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Contact", href: "mailto:jasprcodes@gmail.com" },
            ]}
            footnoteLeading={`© ${new Date().getFullYear()} CutIQ`}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
