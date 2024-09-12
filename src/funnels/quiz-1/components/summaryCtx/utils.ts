import { SavedState } from "src/localStorage";
import {
  getAvgMonthlyWeightLoss,
  getBMI,
  getHeightUnits,
  getMetabolicAge,
  getMonthlyWeightLossResultsByWeeks,
  getWeightLossDuration,
  getWeightUnits,
  roundTo,
} from "../../../../domainUtils";
import { SummaryState } from "./types";

export function getSummaryState(state: SavedState): SummaryState | undefined {
  if (
    state.weight == null ||
    state.weightGoal == null ||
    state.height == null ||
    state.gender == null ||
    state.age == null
  ) {
    return;
  }

  const heightUnits = getHeightUnits(state.unitSystem);
  const height = getHeight(state.height, state.unitSystem);
  if (!height) {
    return;
  }

  const weightUnits = getWeightUnits(state.unitSystem);
  const weightDiff = state.weight - state.weightGoal;
  const weightAvgMonthlyLoss = roundTo(getAvgMonthlyWeightLoss(state.unitSystem));
  const weightLossByWeeks = getMonthlyWeightLossResultsByWeeks(state.weight, state.unitSystem);

  return {
    weightStart: roundTo(state.weight),
    weightEnd: roundTo(state.weightGoal),
    weightDiff: roundTo(weightDiff),
    weightUnits,
    weightLossDuration: getWeightLossDuration(state.weight, state.weightGoal, state.unitSystem),
    weightAvgMonthlyLoss,
    weightLossByWeeks,
    height,
    heightUnits,
    gender: state.gender,
    bmi: getBMI(state.weight, height, state.unitSystem),
    age: state.age,
    metabolicAge: getMetabolicAge(state.age),
  };
}

function getHeight(
  height: NonNullable<SavedState["height"]>,
  unitSystem: SavedState["unitSystem"]
) {
  return unitSystem === "metric"
    ? height.cm != null
      ? height.cm
      : null
    : height.ft != null && height.in != null
      ? height.ft * 12 + height.in
      : null;
}
