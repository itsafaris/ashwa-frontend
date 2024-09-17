import { QuizProvider, QuizUI, Segment } from "@lib/quiz-lib";
import { isProdMode } from "src/utils";
import { Logo } from "@components/logo";
import { trackEvent } from "src/tracking";
import {
  WeightGainRiskSlide,
  MetabolismRateSlide,
  PersonalSummarySlide,
  WeightLossForecastSlide,
} from "./slides";
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
              logo={<Logo height={"35px"} fill="white" mx="auto" />}
            />
          }
          containerProps={{
            minH: "100vh",
            bg: "#7f7185",
          }}
        >
          <Segment title="Personal summary">
            <PersonalSummarySlide />
          </Segment>
          <Segment title="Cortisol rate">
            <WeightGainRiskSlide />
          </Segment>
          <Segment title="Metabolism rate">
            <MetabolismRateSlide />
          </Segment>
          <Segment title="Weight loss forecast">
            <WeightLossForecastSlide />
          </Segment>
        </QuizUI>
      </QuizProvider>
    </SummaryStateProvider>
  );
}
