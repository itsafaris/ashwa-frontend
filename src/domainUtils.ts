import { UnitSystemType } from "src/types";

export const WEIGHT_COFF_IMPERIAL = 2.2046;
export const WEIGHT_COFF_METRIC = 0.45359237;
const AVG_MONTHLY_WEIGHT_LOSS_METRIC = 4.3;

export function toWeightMetric(weight: number): number {
  return weight * WEIGHT_COFF_METRIC;
}

export function toHeightMetric(feet: number, inches: number): number {
  const feetToCm = feet * 30.48;
  const inchesToCm = inches * 2.54;
  return feetToCm + inchesToCm;
}

function toWeightImperial(weight: number): number {
  return weight * WEIGHT_COFF_IMPERIAL;
}

export function getWeightLossDuration(
  startWeight: number,
  endWeight: number,
  unitSystem: UnitSystemType
): number {
  const weightLossPerMonth = getAvgMonthlyWeightLoss(unitSystem);
  const weightDiff = startWeight - endWeight;
  const monthCount = startWeight <= endWeight ? 0 : Math.ceil(weightDiff / weightLossPerMonth);
  return monthCount;
}

export function getMonthlyWeightLossByWeeks(unitSystem: UnitSystemType) {
  const weeklyLossMetric = [
    AVG_MONTHLY_WEIGHT_LOSS_METRIC * 0,
    AVG_MONTHLY_WEIGHT_LOSS_METRIC * 0.3,
    AVG_MONTHLY_WEIGHT_LOSS_METRIC * 0.6,
    AVG_MONTHLY_WEIGHT_LOSS_METRIC * 1,
  ];

  const weeklyLoss =
    unitSystem === "metric" ? weeklyLossMetric : weeklyLossMetric.map(toWeightImperial);

  return weeklyLoss.map((it) => roundTo(it, 1));
}

export function getMonthlyWeightLossResultsByWeeks(
  weightStart: number,
  unitSystem: UnitSystemType
) {
  const weeklyLoss = getMonthlyWeightLossByWeeks(unitSystem);

  return weeklyLoss.map((it) => {
    const diff = weightStart - it;

    return roundTo(diff, 1);
  });
}

export function getAvgMonthlyWeightLoss(unitSystem: UnitSystemType) {
  const res =
    unitSystem === "metric"
      ? AVG_MONTHLY_WEIGHT_LOSS_METRIC
      : toWeightImperial(AVG_MONTHLY_WEIGHT_LOSS_METRIC);

  return roundTo(res, 1);
}

export function roundTo(value: number, decimalPlaces: number = 2) {
  const num = Math.pow(10, decimalPlaces);

  return Math.round(value * num) / num;
}

export function getBMI(weight: number, height: number, unitSystem: UnitSystemType): number {
  return unitSystem === "metric"
    ? parseFloat((weight / ((height / 100) * (height / 100))).toFixed(2))
    : parseFloat(((weight * 703) / (height * height)).toFixed(2));
}

export function getMetabolicAge(actualAge: number): number {
  return actualAge + 7;
}

export function getWeightUnits(unitSystem: UnitSystemType): string {
  return unitSystem === "metric" ? "kg" : "lbs";
}

export function getHeightUnits(unitSystem: UnitSystemType): string {
  return unitSystem === "metric" ? "cm" : "in";
}
