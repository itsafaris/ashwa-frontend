import { navigate } from "gatsby";
import React from "react";
import { SavedState, loadQuizState } from "../../localStorage";
import { WEIGHT_COFF_IMPERIAL } from "src/utils";

// const savedStateMock: SavedState = {
//   version: 1,
//   unitSystem: "metric",
//   email: "dsad@dfsf.cm",
//   age: 55,
//   height: {
//     cm: 170,
//     ft: null,
//     in: null,
//   },
//   weight: 200,
//   weightGoal: 60,
//   goals: ["Manage weight more effectively"],
//   healthState: "Poor",
//   stressFrequency: "Rarely",
//   symptoms: ["Weight bouncing back", "Hunger/cravings"],
//   medicalConditions: ["Other"],
//   emotionalEating: "",
//   weightGain: "No",
//   alergies: ["Sesame", "Other"],
//   gender: "female",
// };

export type SummaryState = {
  weightStartTime: number;
  weightEndTime: number;
  weightEnd: number;
  weightStart: number;
  weightDiff: number;
  weightLossByWeeks: number[];
  weightAvgMonthlyLoss: number;
  weightUnits: string;
  height: number;
  heightUnits: string;
  gender: string;
  bmi: number;
  age: number;
  metabolicAge: number;
};

export const SummaryStateCtx = React.createContext<SummaryState | null>(null);

export function SummaryStateProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = React.useState<SummaryState | null>(null);

  React.useEffect(() => {
    const summaryState = getSummaryState();
    if (!summaryState) {
      navigate("/weight-loss");
    } else {
      setState(summaryState);
    }
  }, []);

  if (state === null) {
    return null;
  }

  return <SummaryStateCtx.Provider value={state}>{children}</SummaryStateCtx.Provider>;
}

export function useSummaryState() {
  const res = React.useContext(SummaryStateCtx);
  if (!res) {
    throw Error("useSummaryState had to be used within SummaryStateProvider");
  }

  return res;
}

const AVG_MONTHLY_WEIGHT_LOSS_METRIC = 4.7;

export function getSummaryState(): SummaryState | undefined {
  const state = loadQuizState();
  if (!state) {
    return;
  }

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
  const weightAvgMonthlyLoss = getAvgMonthlyWeightLoss(state.unitSystem);
  const weightLossByWeeks = getMonthlyWeightLossByWeeks(state.weight, state.unitSystem);
  const { weightStartTime, weightEndTime } = getWeightLossEstimate(
    state.weight,
    state.weightGoal,
    state.unitSystem
  );

  return {
    weightStart: round(state.weight),
    weightEnd: round(state.weightGoal),
    weightDiff: round(weightDiff),
    weightStartTime,
    weightEndTime,
    weightUnits,
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

function getWeightLossEstimate(
  startWeight: number,
  endWeight: number,
  unitSystem: SavedState["unitSystem"]
): {
  weightStartTime: number;
  weightEndTime: number;
} {
  const weightLossPerMonth = getAvgMonthlyWeightLoss(unitSystem);
  const weightDiff = getWeightDiff(startWeight, endWeight);
  const monthCount = startWeight <= endWeight ? 0 : Math.ceil(weightDiff / weightLossPerMonth);
  const start = new Date();
  const end = new Date();
  end.setMonth(start.getMonth() + monthCount);

  return {
    weightStartTime: start.getTime(),
    weightEndTime: end.getTime(),
  };
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
