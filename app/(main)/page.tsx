import { CardGrid } from "@/components/card_grid/card_grid";
import { ComparePreview } from "@/components/compare_preview/compare_preview";
import { CoverImage } from "@/components/cover_image/cover_image";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { StyleGallery } from "@/components/style_gallery/style_gallery";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jasperdevs.github.io/cutiq-site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "CutIQ",
      "url": SITE_URL,
      "description": "AI-powered hair analysis and hairstyle preview app for iPhone",
      "publisher": {
        "@type": "Person",
        "name": "Jasper",
        "email": "jasprcodes@gmail.com",
      },
    },
    {
      "@type": "MobileApplication",
      "name": "CutIQ",
      "alternateName": "CutIQ - AI Hair Analysis",
      "description":
        "AI-powered hair analysis app for iPhone. Get your hair health score, preview hairstyles on your face, and receive personalized hair care routines.",
      "operatingSystem": "iOS 18.0+",
      "applicationCategory": "LifestyleApplication",
      "applicationSubCategory": "Hair Care",
      "availableOnDevice": "iPhone",
      "inLanguage": "en",
      "url": SITE_URL,
      "installUrl": "https://apps.apple.com/app/cutiq/id6760941100",
      "downloadUrl": "https://apps.apple.com/app/cutiq/id6760941100",
      "featureList": [
        "AI Hair Health Analysis",
        "Hairstyle Preview on Your Face",
        "Personalized Hair Care Routines",
        "Weekly Hair Care Schedule",
        "AI Hair Assistant Chat",
      ],
      "contentRating": "4+",
      "author": {
        "@type": "Person",
        "name": "Jasper",
        "email": "jasprcodes@gmail.com",
        "url": SITE_URL,
      },
      "offers": [
        {
          "@type": "Offer",
          "price": 0,
          "priceCurrency": "USD",
          "category": "Free Download",
        },
        {
          "@type": "Offer",
          "price": 4.99,
          "priceCurrency": "USD",
          "description": "CutIQ Pro - Weekly",
        },
        {
          "@type": "Offer",
          "price": 29.99,
          "priceCurrency": "USD",
          "description": "CutIQ Pro - Yearly",
        },
      ],
      "sameAs": ["https://apps.apple.com/app/cutiq/id6760941100"],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is CutIQ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CutIQ is an AI-powered hair analysis app for iPhone. It analyzes your hair health from multiple photo angles, lets you preview hairstyles on your actual face using AI, and creates personalized hair care routines based on your hair type and condition.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the AI hairstyle preview work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Take a selfie or upload a photo, and CutIQ generates realistic hairstyle previews showing how different haircuts would look on your face. The AI considers your face shape and features to produce natural-looking results.",
          },
        },
        {
          "@type": "Question",
          "name": "How does CutIQ analyze hair health?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CutIQ uses photos from multiple angles (front, top, side, hairline) analyzed by AI to assess hair density, texture, and overall condition. You receive a hair health score with specific recommendations.",
          },
        },
        {
          "@type": "Question",
          "name": "Is CutIQ free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CutIQ is free to download. Premium features including unlimited AI hairstyle generations and detailed hair analysis are available through an in-app subscription starting at $4.99/week or $29.99/year.",
          },
        },
        {
          "@type": "Question",
          "name": "Does CutIQ work for all hair types?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CutIQ is designed for all hair types, textures, and conditions including straight, wavy, curly, and coily hair.",
          },
        },
        {
          "@type": "Question",
          "name": "Is my data private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CutIQ stores your data on your device and in your private iCloud account. Photos are processed by AI and not stored on our servers. No account or email is required to use the app.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section paddingTop={80}>
        <Hero
          title="Your hair, analyzed."
          subtitle="AI-powered hair health scores, custom routines, and style previews on your face."
          media={
            <Hero.Video
              src="/cutiq/hero-demo.mp4"
              bezel="iPhone 17 Black"
              alt="CutIQ app showing AI hairstyle preview and hair analysis on iPhone"
            />
          }
          action={<DownloadActionButton size="medium" label="Download on the App Store" />}
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={480}>
          <CardGrid.StackedCard
            maxWidth="full"
            title="Try any style"
            description="30+ looks generated on your actual face."
            media={<StyleGallery />}
            layoutDirection="reverse"
          />
        </CardGrid>

        <CardGrid rowHeight={500}>
          <CardGrid.StackedCard
            maxWidth="half"
            title="Save and compare"
            description="Keep the looks you like. Show your barber."
            media={
              <ComparePreview
                leftSrc="/cutiq/style-buzz-cut.jpg"
                rightSrc="/cutiq/style-textured-fringe.jpg"
              />
            }
            layoutDirection="forward"
          />

          <CardGrid.StackedCard
            maxWidth="half"
            title="Know your hair score"
            description="Type, texture, density, and face shape in seconds."
            media={
              <CoverImage
                src="/cutiq/hair-score.jpg"
                alt="CutIQ hair analysis showing 8.5 score with hair profile details"
                objectPosition="center 40%"
              />
            }
            layoutDirection="forward"
          />
        </CardGrid>

        <CardGrid rowHeight={160}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="target"
            title="Weekly routine"
            description="Products, timing, and progress tracking."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="send"
            title="AI hair chat"
            description="Knows your score and routine."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="No sign-up"
            description="Works with iCloud."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={40} paddingBottom={60}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
          padding: "0 20px",
        }}>
          <h2 style={{
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            See what works for you.
          </h2>
          <p style={{
            fontSize: "16px",
            color: "var(--color-text-secondary)",
            maxWidth: "360px",
          }}>
            Free to try. No account needed.
          </p>
          <div style={{ marginTop: "8px" }}>
            <DownloadActionButton size="medium" label="Download on the App Store" />
          </div>
        </div>
      </Section>
    </>
  );
}
