export type SummaryState = {
  weightEnd: number;
  weightStart: number;
  weightDiff: number;
  weightLossDuration: number; // number of months required to lose weight
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
