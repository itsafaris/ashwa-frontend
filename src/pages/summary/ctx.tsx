import { navigate } from "gatsby";
import React from "react";
import { getReadableState, ReadableState } from "src/utils";

export const ReadableStateCtx = React.createContext<ReadableState | null>(null);

export function ReadableStateProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = React.useState<ReadableState | null>(null);

  React.useEffect(() => {
    const readableState = getReadableState();
    if (!readableState) {
      navigate("/weight-loss");
    } else {
      setState(readableState);
    }
  }, []);

  if (state === null) {
    return null;
  }

  return <ReadableStateCtx.Provider value={state}>{children}</ReadableStateCtx.Provider>;
}

export function useReadableState() {
  const res = React.useContext(ReadableStateCtx);
  if (!res) {
    throw Error("useReadableState had to be used within ReadableStateProvider");
  }

  return res;
}
