import { loadQuizState } from "./localStorage";

export function isProdMode() {
  return process.env.NODE_ENV === "production";
}

export function calculateBMI(
  weight: number,
  height: number,
  system: "metric" | "imperial"
): number {
  return system === "metric"
    ? parseFloat((weight / ((height / 100) * (height / 100))).toFixed(2))
    : parseFloat(((weight * 703) / (height * height)).toFixed(2));
}

export function getMetabolicAge(actualAge: number): number {
  return actualAge + 7;
}

export function calcProgramDates(
  startWeight: number,
  endWeight: number,
  system: "metric" | "imperial"
): {
  startDate: string;
  endDate: string;
} {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const imperialCoff = 2.2046;
  const weightLossPerMonth = system === "metric" ? 4.7 : 4.7 * imperialCoff;
  const totalWeightLoss = startWeight - endWeight;

  let monthsNeeded = Math.ceil(totalWeightLoss / weightLossPerMonth);
  if (startWeight <= endWeight) {
    monthsNeeded = 0;
  }

  const startDateObj = new Date();
  const endDateObj = new Date();
  endDateObj.setMonth(startDateObj.getMonth() + monthsNeeded);

  return {
    startDate: `${
      monthNames[startDateObj.getMonth()]
    } ${startDateObj.getFullYear()}`,
    endDate: `${monthNames[endDateObj.getMonth()]} ${endDateObj.getFullYear()}`,
  };
}

export type ReadableState = {
  age: number;
  startWeight: string;
  startDate: string;
  endWeight: string;
  endDate: string;
  weightDiff: string;
  monthlyLoss: string;
  lossByWeeks: string[];
  height: string;
  gender: string;
  bmi: number;
  metabolicAge: number;
};

export function getReadableState(): ReadableState | undefined {
  const state = loadQuizState();
  if (!state) {
    return;
  }

  const weight = state.weight;
  const unitSystem = state.unitSystem;
  const weightGoal = state.weightGoal;
  const height = state.height
    ? state.unitSystem === "metric"
      ? state.height.cm
        ? state.height.cm
        : null
      : state.height.ft && state.height.in
      ? state.height.ft * 12 + state.height.in
      : null
    : null;
  const gender = state.gender;
  const age = state.age;

  if (
    weight == null ||
    weightGoal == null ||
    unitSystem == null ||
    height == null ||
    gender == null ||
    age == null
  ) {
    return;
  }

  const imperialCoff = 2.2046;
  const program = calcProgramDates(weight, weightGoal, unitSystem);
  const suffixW = unitSystem === "metric" ? "kg" : "lbs";
  const suffixH = unitSystem === "metric" ? "cm" : "in";
  const lossByWeeks =
    unitSystem === "metric"
      ? [
          `${round(weight)}${suffixW}`,
          `${round(weight - 1.3)}${suffixW}`,
          `${round(weight - 3.4)}${suffixW}`,
          `${round(weight - 4.7)}${suffixW}`,
        ]
      : [
          `${round(weight)}${suffixW}`,
          `${round(weight - 1.3 * imperialCoff)}${suffixW}`,
          `${round(weight - 3.4 * imperialCoff)}${suffixW}`,
          `${round(weight - 4.7 * imperialCoff)}${suffixW}`,
        ];

  const bmi = calculateBMI(weight, height, unitSystem);
  const metabolicAge = getMetabolicAge(age);

  return {
    startWeight: `${round(weight)}${suffixW}`,
    endWeight: `${round(weightGoal)}${suffixW}`,
    startDate: program.startDate,
    endDate: program.endDate,
    weightDiff: `-${round(weight) - round(weightGoal)}${suffixW}`,
    monthlyLoss: `-${round(
      unitSystem === "metric" ? 4.7 : 4.7 * imperialCoff
    )}${suffixW}`,
    lossByWeeks,
    height: `${height}${suffixH}`,
    gender: gender === "female" ? "Female" : "Male",
    bmi,
    age,
    metabolicAge,
  };
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}
