import {
  AgeState,
  EmailState,
  HeightState,
  MultiState,
  QuizObject,
  QuizState,
  SingleState,
  Snapshot,
  WeightState,
} from "@lib/quiz-lib";
import { convertHeightToCm, convertWeightToKg } from "./utils";

export type QuizStateTyped = ReturnType<typeof getTypedQuizState>;

// IMPORTANT - change this if making breaking changes to the state object
export const STATE_VERSION = 1;

export function getTypedQuizState(quizState: QuizState | Snapshot<QuizState>) {
  const slideState = quizState.slideStateByID;

  const email = (slideState["your-email"] as EmailState)?.value;
  const age = (slideState["age"] as AgeState)?.value;
  const height = (slideState["height"] as HeightState)?.value;
  const weight = (slideState["weight"] as WeightState)?.value;
  const weightGoal = (slideState["weight-goal"] as WeightState)?.value;
  const goals = (slideState["goals"] as MultiState)?.value?.map(
    (it) => it.value
  );
  const healthState = (slideState["health-state"] as SingleState)?.value?.value;
  const stressFrequency = (slideState["stress"] as SingleState)?.value?.value;
  const symptoms = (slideState["symptoms"] as MultiState)?.value?.map(
    (it) => it.value
  );
  const emotionalEating = (slideState["emotional-eating"] as SingleState)?.value
    ?.value;
  const weightGain = (slideState["weight-gain"] as SingleState)?.value?.value;
  const medicalConditions = (
    slideState["medical-conditions"] as MultiState
  )?.value?.map((it) => it.value);
  const alergies = (slideState["alergies"] as MultiState)?.value?.map(
    (it) => it.value
  );

  return {
    version: STATE_VERSION, // IMPORTANT - change this if making breaking changes to the state object
    unitSystem: quizState.unitSystem,
    email,
    age,
    height,
    weight,
    weightGoal,
    goals,
    healthState,
    stressFrequency,
    symptoms,
    emotionalEating,
    medicalConditions,
    weightGain,
    alergies,
  };
}

export function getCalculatedState(quizState: QuizState | Snapshot<QuizState>) {
  const s = getTypedQuizState(quizState);

  let heightInCM: number | null = null;
  if (s.height) {
    if (s.unitSystem === "imperial") {
      heightInCM = convertHeightToCm(s.height.ft ?? 0, s.height.in ?? 0);
    } else {
      heightInCM = s.height.cm;
    }
  }

  let weightInKG: number | null = null;
  if (s.weight) {
    if (s.unitSystem === "imperial") {
      weightInKG = convertWeightToKg(s.weight);
    } else {
      weightInKG = s.weight;
    }
  }

  let weightGoalInKG: number | null = null;
  if (s.weightGoal) {
    if (s.unitSystem === "imperial") {
      weightGoalInKG = convertWeightToKg(s.weightGoal);
    } else {
      weightGoalInKG = s.weightGoal;
    }
  }

  return {
    ...s,
    heightInCM,
    weightInKG,
    weightGoalInKG,
    weightDiffInKG:
      weightGoalInKG && weightInKG ? weightGoalInKG - weightInKG : null,
  };
}
