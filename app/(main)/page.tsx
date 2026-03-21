import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";

export default function Page() {
  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title="Know your hair. Try any style."
          subtitle="Four photos. One AI analysis. A score, a routine, and realistic previews of how you'd actually look — before you sit in the chair."
          media={
            <Hero.Video
              src="/cutiq/hero-demo.mp4"
              bezel="iPhone 17 Black"
              alt="CutIQ hair analysis and style preview demo"
            />
          }
          action={<DownloadActionButton size="medium" />}
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={440}>
          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="AI hair analysis from four angles"
            description="Front, top, side, hairline. The app walks you through each shot and returns a health score, face shape, texture profile, and what to do next."
            media={
              <CardGrid.StackedCard.Video
                src="/cutiq/hero-demo.mp4"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.28 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="target"
            title="A routine that adapts"
            description="Your analysis builds a weekly schedule with products and timing. Check off tasks daily. Redo the analysis and it adjusts."
          />

          <CardGrid.StackedCard
            maxWidth="third"
            title="Try it on your face"
            description="11 styles or describe your own. Every preview uses your actual photo."
            media={
              <CardGrid.StackedCard.Video
                src="/cutiq/app-demo.mp4"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.35 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="Preview before you commit"
            description="Generate any hairstyle on your own photo. Save the ones worth keeping, compare side by side, share with your barber."
            media={
              <CardGrid.StackedCard.Image
                src="/cutiq/style-side-part.jpg"
                alt="Side part hairstyle preview"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "top", croppedRatio: 0.25 }}
              />
            }
            layoutDirection="reverse"
            textAlignment="leading"
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="send"
            title="Ask the AI"
            description="Chat with an advisor that knows your score, hair type, and routine. Get product suggestions or change your schedule mid-conversation."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="No account needed"
            description="Uses your iCloud identity. No email, no password, no sign-up form."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="check_circle"
            title="Private by default"
            description="Source photos are never stored on our servers. Generated images and your front analysis photo sync through your private iCloud. Nothing is sold."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={60} paddingBottom={160}>
        <DownloadActionButton size="medium" />
      </Section>
    </>
  );
}
