import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";

export default function Page() {
  return (
    <>
      <Section paddingTop={80}>
        <Hero
          title="Know your hair before you change it."
          subtitle="Four angles. AI analysis. A health score, face shape read, personalized routine, and realistic style previews on your own photo."
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
            title="Not a filter. An analysis."
            description="Capture four angles of your hair. Get a health score, texture profile, face shape, and specific things to fix. The kind of feedback a good stylist would give you."
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
            title="A routine, not a guess"
            description="Your analysis generates a weekly schedule with products and timing. Check off tasks. Redo the analysis and it updates."
          />

          <CardGrid.StackedCard
            maxWidth="third"
            title="Preview any style"
            description="30+ styles or type your own. Every preview uses your actual photo, not a generic model."
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
            title="Save it. Share it. Decide later."
            description="Keep the looks you like. Compare them side by side. Send them to your barber."
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

        <CardGrid rowHeight={180}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="send"
            title="Ask the AI"
            description="Chat with an assistant that already knows your score, hair type, and routine."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="No account"
            description="Works with iCloud. No email, no password, no sign-up form."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="check_circle"
            title="Private"
            description="Photos never hit our servers. Your data syncs through your own iCloud."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={40} paddingBottom={60}>
        <DownloadActionButton size="medium" label="Download on the App Store" />
      </Section>
    </>
  );
}
