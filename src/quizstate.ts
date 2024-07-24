import {
  AgeState,
  EmailState,
  HeightState,
  QuizState,
  Snapshot,
  WeightState,
} from "@lib/quiz-lib";

export type QuizStateTyped = ReturnType<typeof getTypedQuizState>;

// IMPORTANT - change this if making breaking changes to the state object
export const STATE_VERSION = 1;

export function getTypedQuizState(
  quizState: QuizState["state"] | Snapshot<QuizState["state"]>
) {
  const slideState = quizState.slideStateByID;

  const email = (slideState["your-email"] as EmailState)?.value;
  const age = (slideState["age"] as AgeState)?.value;
  const height = (slideState["height"] as HeightState)?.value;
  const weight = (slideState["weight"] as WeightState)?.value;
  const weightGoal = (slideState["weight-goal"] as WeightState)?.value;

  return {
    version: STATE_VERSION, // IMPORTANT - change this if making breaking changes to the state object
    unitSystem: quizState.unitSystem,
    email,
    age,
    height,
    weight,
    weightGoal,
  };
}
