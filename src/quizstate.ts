import {
  AgeState,
  EmailState,
  HeightState,
  QuizQuestionsState,
  WeightState,
} from "@lib/quiz-lib";

export function getTypedQuizState(state: QuizQuestionsState) {
  const email = (state["your-email"] as EmailState)?.value;
  const age = (state["age"] as AgeState)?.value;
  const height = (state["height"] as HeightState)?.value;
  const weight = (state["weight"] as WeightState)?.value;

  return {
    email,
    age,
    height,
    weight,
  };
}
