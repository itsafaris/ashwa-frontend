import { QuizProvider, QuizUI, Segment } from "@lib/quiz-lib";
import { isProdMode } from "src/utils";
import { Logo } from "@components/logo";
import { trackEvent } from "src/tracking";
import { CortisolLevelsSlide, WeightGainRiskSlide, WeightLossForecastSlide } from "./slides";
import { ProgressIndicator } from "@lib/quiz-lib/public/progress";
import { SummaryStateProvider } from "../components/summaryCtx/ctx";

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
              logo={<Logo height={"28px"} fill="white" mx="auto" />}
            />
          }
          containerProps={{
            minH: "100vh",
            bg: "#352833",
          }}
        >
          <Segment title="Cortisol rate">
            <CortisolLevelsSlide />
          </Segment>
          <Segment title="Personal summary">
            <WeightGainRiskSlide />
          </Segment>
          <Segment title="Weight loss forecast">
            <WeightLossForecastSlide />
          </Segment>
        </QuizUI>
      </QuizProvider>
    </SummaryStateProvider>
  );
}
