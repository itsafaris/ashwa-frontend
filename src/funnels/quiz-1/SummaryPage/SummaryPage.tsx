import { QuizProvider, QuizUI, Segment } from "@lib/quiz-lib";
import { isProdMode } from "src/utils";
import { Logo } from "@components/logo";
import { trackEvent } from "src/tracking";
import { ProgressIndicator } from "@lib/quiz-lib/public/progress";
import { SummaryStateProvider } from "../components/summaryCtx/ctx";
import { CortisolLevelsSlide } from "./CortisolLevelsSlide";
import { WeightGainRiskSlide } from "./WeightGainRiskSlide";
import { WeightLossForecastSlide } from "./WeightLossForecastSlide";
import { SolutionSlide } from "./SolutionSlide";
import { HowItWorksSlide } from "./HowItWorksSlide";
import { TestimonialOneSlide } from "./TestimonialOneSlide";
import { TestimonialMoreSlide } from "./TestimonialMoreSlide";

export function SummaryPage() {
  return (
    <SummaryStateProvider>
      <QuizProvider
        showDebugUI={!isProdMode()}
        onTrackingEvent={(event) => {
          trackEvent(event);
        }}
      >
        <QuizUI
          progressComponent={
            <ProgressIndicator
              showControls={false}
              logo={<Logo height={"28px"} fill="black" mx="auto" />}
            />
          }
          containerProps={{
            minH: "100vh",
            bg: "white",
          }}
        >
          <Segment title="Cortisol levels">
            <CortisolLevelsSlide />
          </Segment>
          <Segment title="Weight gain risk">
            <WeightGainRiskSlide />
          </Segment>
          <Segment title="Weight loss forecast">
            <WeightLossForecastSlide />
          </Segment>
          <Segment title="Solution">
            <SolutionSlide />
          </Segment>
          <Segment title="How it works">
            <HowItWorksSlide />
          </Segment>
          <Segment title="User testimonial">
            <TestimonialOneSlide />
          </Segment>
          <Segment title="More testimonials">
            <TestimonialMoreSlide />
          </Segment>
        </QuizUI>
      </QuizProvider>
    </SummaryStateProvider>
  );
}
