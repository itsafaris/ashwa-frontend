import { SavedState } from "src/localStorage";
import { getSummaryState } from "./utils";
import { SummaryState } from "./types";

const defaultQuizMock: SavedState = {
  version: 1,
  unitSystem: "metric",
  email: undefined,
  age: undefined,
  height: undefined,
  weight: undefined,
  weightGoal: undefined,
  goals: undefined,
  healthState: undefined,
  stressFrequency: undefined,
  symptoms: undefined,
  medicalConditions: undefined,
  emotionalEating: undefined,
  weightGain: undefined,
  alergies: undefined,
  gender: undefined,
};

describe("Summary state calculations", () => {
  test("metric state is valid", () => {
    const quizMock: SavedState = {
      ...defaultQuizMock,
      age: 55,
      weight: 80,
      weightGoal: 61,
      height: {
        cm: 180,
        ft: null,
        in: null,
      },
      gender: "female",
      unitSystem: "metric",
    };

    const result = getSummaryState(quizMock);

    const expected: SummaryState = {
      weightStart: 80,
      weightEnd: 61,
      weightDiff: 19,
      weightUnits: "kg",
      weightLossDuration: 5,
      weightAvgMonthlyLoss: 4.7,
      weightLossByWeeks: [80, 78.7, 76.6, 75.3],
      height: 180,
      heightUnits: "cm",
      gender: "female",
      bmi: 24.69,
      age: 55,
      metabolicAge: 62,
    };

    expect(result).toStrictEqual(expected);
  });

  test("imperial state is valid", () => {
    const quizMock: SavedState = {
      ...defaultQuizMock,
      age: 55,
      weight: 177,
      weightGoal: 135,
      height: {
        cm: null,
        ft: 5,
        in: 7,
      },
      gender: "female",
      unitSystem: "imperial",
    };

    const result = getSummaryState(quizMock);

    const expected: SummaryState = {
      weightStart: 177,
      weightEnd: 135,
      weightDiff: 42,
      weightUnits: "lbs",
      weightLossDuration: 5,
      weightAvgMonthlyLoss: 10.36,
      weightLossByWeeks: [177, 174.13, 169.5, 166.64],
      height: 67,
      heightUnits: "in",
      gender: "female",
      bmi: 27.72,
      age: 55,
      metabolicAge: 62,
    };

    expect(result).toStrictEqual(expected);
  });

  test("no weight loss", () => {
    const quizMock: SavedState = {
      ...defaultQuizMock,
      age: 55,
      weight: 80,
      weightGoal: 80,
      height: {
        cm: 180,
        ft: null,
        in: null,
      },
      gender: "female",
      unitSystem: "metric",
    };

    const result = getSummaryState(quizMock);

    const expected: SummaryState = {
      weightStart: 80,
      weightEnd: 80,
      weightDiff: 0,
      weightUnits: "kg",
      weightLossDuration: 0,
      weightAvgMonthlyLoss: 4.7,
      weightLossByWeeks: [80, 78.7, 76.6, 75.3],
      height: 180,
      heightUnits: "cm",
      gender: "female",
      bmi: 24.69,
      age: 55,
      metabolicAge: 62,
    };

    expect(result).toStrictEqual(expected);
  });
});
