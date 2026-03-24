import { BlurTextEffect } from "@/components/blur_text_effect/blur_text_effect";
import { CardGrid } from "@/components/card_grid/card_grid";
import { ComparePreview } from "@/components/compare_preview/compare_preview";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { FAQ } from "@/components/faq/faq";
import { Hero } from "@/components/hero/hero";
import { ScrollReveal } from "@/components/scroll_reveal/scroll_reveal";
import { Section } from "@/components/section/section";
import { StyleGallery } from "@/components/style_gallery/style_gallery";

const FAQ_ITEMS = [
  {
    question: "What is CutIQ?",
    answer: "An AI-powered hair analysis app for iPhone. Get your hair health score, preview hairstyles on your face, and follow personalized routines.",
  },
  {
    question: "How does the hairstyle preview work?",
    answer: "Take a selfie or pick a photo. CutIQ generates realistic previews of 30+ hairstyles on your actual face, considering your face shape and features.",
  },
  {
    question: "How does hair analysis work?",
    answer: "You take photos from multiple angles. AI analyzes your hair density, texture, and condition, then gives you a score with specific recommendations.",
  },
  {
    question: "Is CutIQ free?",
    answer: "Free to download. Premium features like unlimited hairstyle generations and detailed analysis are available through an optional subscription.",
  },
  {
    question: "Does it work for all hair types?",
    answer: "Yes. Straight, wavy, curly, coily. All hair types, textures, and conditions.",
  },
  {
    question: "Is my data private?",
    answer: "Your data is stored on your device and synced through your private iCloud account. Photos sent for AI analysis are processed and not retained. No account or email required.",
  },
];

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
      "offers": {
        "@type": "Offer",
        "price": 0,
        "priceCurrency": "USD",
        "category": "Free Download",
      },
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
            "text": "CutIQ is free to download. Premium features including unlimited AI hairstyle generations and detailed hair analysis are available through an optional in-app subscription.",
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
            "text": "Your data is stored on your device and synced through your private iCloud account. Photos sent for AI analysis are processed and not retained. No account or email is required.",
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
        <ScrollReveal>
          <Hero
            title={<><BlurTextEffect>Your hair, </BlurTextEffect><em><BlurTextEffect delay={200}>analyzed.</BlurTextEffect></em></>}
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
        </ScrollReveal>
      </Section>

      <Section navigationAnchor="features">
        <ScrollReveal>
          <CardGrid rowHeight={480}>
            <CardGrid.StackedCard
              maxWidth="full"
              title="Try any style"
              description="30+ looks generated on your actual face."
              media={<StyleGallery />}
              layoutDirection="reverse"
            />
          </CardGrid>
        </ScrollReveal>

        <ScrollReveal>
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

            <CardGrid.OverlaidCard
              maxWidth="half"
              imageSrc="/cutiq/hair-score.jpg"
              imageObjectPosition="center 40%"
              title="Know your hair score"
              description="Type, texture, density, and face shape in seconds."
              textAlignment="bottomLeading"
            />
          </CardGrid>
        </ScrollReveal>

        <ScrollReveal>
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
        </ScrollReveal>
      </Section>

      <ScrollReveal>
        <Section paddingTop={60} paddingBottom={60}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            padding: "0 20px",
          }}>
            <h2 style={{
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}>
              Questions
            </h2>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
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
              <BlurTextEffect>See what works for you.</BlurTextEffect>
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
      </ScrollReveal>
    </>
  );
}
