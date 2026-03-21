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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cutiq.app";
const TITLE = "CutIQ - AI hair analysis and style previews";
const DESCRIPTION =
  "Analyze your hair from four angles, get a health score and routine, and preview any hairstyle on your own photo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "CutIQ app preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-preview.png"],
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

        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          <Navbar
            icon={<AppIcon src="/cutiq/app-icon.png" mask />}
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
            appIcon={<AppIcon src="/cutiq/app-icon.png" mask filter="grayscale" />}
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
