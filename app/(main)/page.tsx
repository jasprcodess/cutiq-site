import { CardGrid } from "@/components/card_grid/card_grid";
import { ComparePreview } from "@/components/compare_preview/compare_preview";
import { CoverImage } from "@/components/cover_image/cover_image";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { StyleGallery } from "@/components/style_gallery/style_gallery";

export default function Page() {
  return (
    <>
      <Section paddingTop={80}>
        <Hero
          title="Your hair, analyzed."
          subtitle="AI-powered hair health scores, custom routines, and style previews on your face."
          media={
            <Hero.Video
              src="/cutiq/hero-demo.mp4"
              bezel="iPhone 17 Black"
              alt="CutIQ app demo"
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

        <CardGrid rowHeight={400}>
          <CardGrid.StackedCard
            maxWidth="half"
            title="Save and compare"
            description="Keep the looks you like. Show your barber."
            media={
              <ComparePreview
                leftSrc="/cutiq/style-buzz-cut.jpg"
                rightSrc="/cutiq/style-surfer-long.jpg"
              />
            }
            layoutDirection="forward"
          />

          <CardGrid.StackedCard
            maxWidth="half"
            title="Four photos. Real feedback."
            description="Health score, face shape, and what to do next."
            media={
              <CoverImage
                src="/cutiq/style-side-part.jpg"
                alt="AI-generated hairstyle preview"
                objectPosition="center 20%"
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
