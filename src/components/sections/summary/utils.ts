import { SavedState } from "../../../localStorage";
import { WEIGHT_COFF_IMPERIAL } from "../../../utils";
import { SummaryState } from "./types";

const AVG_MONTHLY_WEIGHT_LOSS_METRIC = 4.7;

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
  const weightDiff = getWeightDiff(state.weight, state.weightGoal);
  const weightAvgMonthlyLoss = round(getAvgMonthlyWeightLoss(state.unitSystem));
  const weightLossByWeeks = getMonthlyWeightLossByWeeks(state.weight, state.unitSystem);

  return {
    weightStart: round(state.weight),
    weightEnd: round(state.weightGoal),
    weightDiff: round(weightDiff),
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

function getWeightLossDuration(
  startWeight: number,
  endWeight: number,
  unitSystem: SavedState["unitSystem"]
): number {
  const weightLossPerMonth = getAvgMonthlyWeightLoss(unitSystem);
  const weightDiff = getWeightDiff(startWeight, endWeight);
  const monthCount = startWeight <= endWeight ? 0 : Math.ceil(weightDiff / weightLossPerMonth);
  return monthCount;
}

function getMonthlyWeightLossByWeeks(weightStart: number, unitSystem: SavedState["unitSystem"]) {
  const weeklyLossMetric = [0, 1.3, 3.4, AVG_MONTHLY_WEIGHT_LOSS_METRIC];
  const weeklyLoss =
    unitSystem === "metric" ? weeklyLossMetric : weeklyLossMetric.map(toImperialWeight);

  return weeklyLoss.map((it) => round(weightStart - it));
}

function getAvgMonthlyWeightLoss(unitSystem: SavedState["unitSystem"]) {
  return unitSystem === "metric"
    ? AVG_MONTHLY_WEIGHT_LOSS_METRIC
    : toImperialWeight(AVG_MONTHLY_WEIGHT_LOSS_METRIC);
}

function getHeight(
  height: NonNullable<SavedState["height"]>,
  unitSystem: SavedState["unitSystem"]
) {
  return unitSystem === "metric"
    ? height.cm
      ? height.cm
      : null
    : height.ft && height.in
      ? height.ft * 12 + height.in
      : null;
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function getWeightDiff(start: number, end: number) {
  return start - end;
}

function toImperialWeight(weight: number): number {
  return weight * WEIGHT_COFF_IMPERIAL;
}

function getBMI(weight: number, height: number, unitSystem: SavedState["unitSystem"]): number {
  return unitSystem === "metric"
    ? parseFloat((weight / ((height / 100) * (height / 100))).toFixed(2))
    : parseFloat(((weight * 703) / (height * height)).toFixed(2));
}

function getMetabolicAge(actualAge: number): number {
  return actualAge + 7;
}

function getWeightUnits(unitSystem: SavedState["unitSystem"]): string {
  return unitSystem === "metric" ? "kg" : "lbs";
}

function getHeightUnits(unitSystem: SavedState["unitSystem"]): string {
  return unitSystem === "metric" ? "cm" : "in";
}
