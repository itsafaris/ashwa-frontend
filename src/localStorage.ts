import { QuizStateTyped, STATE_VERSION } from "./quizstate";

type SavedState = QuizStateTyped & { gender?: "male" | "female" };

export function saveQuizState(state: SavedState) {
  localStorage.setItem("quizstate", JSON.stringify(state));
}

export function clearQuizState() {
  localStorage.removeItem("quizstate");
}

export function loadQuizState(): SavedState | undefined {
  const it = localStorage.getItem("quizstate");
  if (!it) {
    return;
  }

  let state;

  try {
    state = JSON.parse(it);
  } catch (err) {
    return;
  }

  if (!isQuizState(state)) {
    localStorage.removeItem("quizstate");
    return;
  }

  if (state.version !== STATE_VERSION) {
    localStorage.removeItem("quizstate");
    return;
  }

  return state;
}

function isQuizState(obj: unknown): obj is QuizStateTyped {
  if (typeof obj !== "object" || obj == null) {
    return false;
  }
  return true;
}
