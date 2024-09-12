import { navigate } from "gatsby";
import React from "react";
import { SummaryState } from "./types";
import { getSummaryState } from "./utils";
import { loadQuizState, SavedState } from "src/localStorage";

// const savedStateMetricMock: SavedState = {
//   version: 1,
//   unitSystem: "metric",
//   email: "dsad@dfsf.cm",
//   age: 43,
//   height: {
//     cm: 170,
//     ft: null,
//     in: null,
//   },
//   weight: 100,
//   weightGoal: 75,
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

// const savedStateImperialMock: SavedState = {
//   version: 1,
//   unitSystem: "imperial",
//   email: "dsad@dfsf.cm",
//   age: 43,
//   height: {
//     cm: null,
//     ft: 5,
//     in: 7,
//   },
//   weight: 203,
//   weightGoal: 203,
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

const SummaryStateCtx = React.createContext<SummaryState | null>(null);

export function SummaryStateProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = React.useState<SummaryState | null>(null);

  React.useEffect(() => {
    const state = loadQuizState();
    if (state) {
      const summaryState = getSummaryState(state);
      if (!summaryState) {
        navigate("/weight-loss");
      } else {
        setState(summaryState);
      }
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
