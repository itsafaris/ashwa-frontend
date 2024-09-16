import { FormControl, Input, Text } from "@chakra-ui/react";
import { useSlide } from "../public/slide";
import { SlidePropsAge } from "../public/types";
import { AgeState, useQuizActions, useQuizSnapshot } from "./state";
import { commonInputStyles } from "./commonInput";

export type AgeProps = {} & SlidePropsAge;

export function Age({ placeholder }: AgeProps) {
  const actions = useQuizActions();
  const slide = useSlide();
  const snap = useQuizSnapshot();

  const state = snap.slideStateByID[slide.id] as AgeState;

  return (
    <FormControl position={"relative"}>
      <Input
        {...commonInputStyles()}
        mb={7}
        size={"lg"}
        placeholder={placeholder || "Age"}
        value={state.value ?? ""}
        type="number"
        _placeholder={{
          color: "gray.400",
        }}
        onChange={(e) => {
          const i = parseInt(e.target.value);
          actions.setAgeValue(slide.id, i);
        }}
      />

      {!state.validation.isValid && state.attempts > 0 && (
        <Text position={"absolute"} bottom={0} color="red.300" fontSize={"md"}>
          {state.validation.message}
        </Text>
      )}
    </FormControl>
  );
}
