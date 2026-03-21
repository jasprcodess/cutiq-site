import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";

export default function Page() {
  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title="See what works before you cut."
          subtitle="Take four photos. Get an AI hair analysis with a health score, face shape, and a weekly routine. Preview any hairstyle on your own face."
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
        <CardGrid rowHeight={440}>
          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="Hair analysis from four angles"
            description="Capture your front, top, side, and hairline. Get back a health score, face shape, texture read, and clear next steps."
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
            title="Weekly routine"
            description="Your analysis creates a schedule with products and timing. Check off tasks daily. Run a new analysis and it updates."
          />

          <CardGrid.StackedCard
            maxWidth="third"
            title="Try styles on your face"
            description="Pick from 30+ styles or type your own. Every preview is generated on your actual photo."
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
            title="Compare before you commit"
            description="Save the looks you like. Share them with your barber. Stop guessing."
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
        </CardGrid>

        <CardGrid rowHeight={200}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="send"
            title="AI hair chat"
            description="Ask about products, your score, or your routine. The AI already has your full analysis."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="No account needed"
            description="Works with your iCloud. No email, no password, no sign-up."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="check_circle"
            title="Your data stays private"
            description="Source photos never hit our servers. Everything syncs through your personal iCloud."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={40} paddingBottom={80}>
        <DownloadActionButton size="medium" label="Download on the App Store" />
      </Section>
    </>
  );
}
