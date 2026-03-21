import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";

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
        <CardGrid rowHeight={440}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="target"
            title="Four photos. Real feedback."
            description="Health score, face shape, and what to do next."
          />

          <CardGrid.OverlaidCard
            maxWidth="twoThirds"
            imageSrc="/cutiq/style-gallery.jpg"
            title="Try any style"
            description="30+ looks on your actual face."
            textAlignment="bottomLeading"
            textColorTheme="dark"
          />

          <CardGrid.OverlaidCard
            maxWidth="twoThirds"
            imageSrc="/cutiq/before-after.jpg"
            title="Save and compare"
            description="Keep the looks you like. Show your barber."
            textAlignment="bottomLeading"
            textColorTheme="dark"
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="target"
            title="Weekly routine"
            description="Products, timing, and progress tracking."
          />
        </CardGrid>

        <CardGrid rowHeight={160}>
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

          <CardGrid.IconCard
            maxWidth="third"
            iconName="check_circle"
            title="Private"
            description="Photos stay on your device."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={20} paddingBottom={40}>
        <DownloadActionButton size="medium" label="Download on the App Store" />
      </Section>
    </>
  );
}
