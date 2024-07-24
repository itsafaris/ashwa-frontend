import {
  AgeState,
  EmailState,
  HeightState,
  QuizQuestionsState,
  WeightState,
} from "@lib/quiz-lib";

export type QuizStateTyped = ReturnType<typeof getTypedQuizState>;

// IMPORTANT - change this if making breaking changes to the state object
export const STATE_VERSION = 1;

export function getTypedQuizState(state: QuizQuestionsState) {
  const email = (state["your-email"] as EmailState)?.value;
  const age = (state["age"] as AgeState)?.value;
  const height = (state["height"] as HeightState)?.value;
  const weight = (state["weight"] as WeightState)?.value;

  return {
    version: STATE_VERSION, // IMPORTANT - change this if making breaking changes to the state object
    email,
    age,
    height,
    weight,
  };
}
