import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useSlide } from "../public/slide";
import { SlidePropsWeight } from "../public/types";
import { useQuizActions, useQuizSnapshot, WeightState } from "./state";
import { commonInputStyles } from "./commonInput";

export type WeightProps = {} & SlidePropsWeight;

export function Weight({}: WeightProps) {
  const actions = useQuizActions();
  const slide = useSlide();
  const snap = useQuizSnapshot();

  const state = snap.slideStateByID[slide.id] as WeightState;
  const system = snap.unitSystem;

  return (
    <FormControl position={"relative"} pb={7}>
      <InputGroup>
        <Input
          {...commonInputStyles()}
          size={"lg"}
          placeholder={"Weight"}
          value={state.value ?? ""}
          type="number"
          onChange={(e) => {
            const i = parseInt(e.target.value);
            let it = isNaN(i) ? null : i;
            actions.setWeightValue(slide.id, it);
          }}
        />
        <InputRightElement>
          <Text>{system === "imperial" ? "lb" : "kg"}</Text>
        </InputRightElement>
      </InputGroup>

      {!state.validation.isValid && state.attempts > 0 && (
        <Text position={"absolute"} bottom={0} color="red.300" fontSize={"md"}>
          {state.validation.message}
        </Text>
      )}
    </FormControl>
  );
}
