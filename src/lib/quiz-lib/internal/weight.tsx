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
  const system = state.value?.system ?? "imperial";

  return (
    <FormControl position={"relative"} pb={7}>
      <Flex
        gap={2}
        width={"full"}
        mb={3}
        bg={"bg.100"}
        p={1}
        borderRadius={"lg"}
      >
        <Button
          size="sm"
          flex={1}
          colorScheme={system === "imperial" ? "bg" : undefined}
          variant={system === "imperial" ? "solid" : "text"}
          onClick={() => {
            actions.setWeightValue(slide.id, {
              system: "imperial",
              value: null,
            });
          }}
        >
          Imperial
        </Button>
        <Button
          size="sm"
          flex={1}
          colorScheme={system === "metric" ? "bg" : undefined}
          variant={system === "metric" ? "solid" : "text"}
          onClick={() => {
            actions.setWeightValue(slide.id, {
              system: "metric",
              value: null,
            });
          }}
        >
          Metric
        </Button>
      </Flex>
      <InputGroup>
        <Input
          {...commonInputStyles()}
          size={"lg"}
          placeholder={"Weight"}
          value={state.value?.value ?? ""}
          type="number"
          onChange={(e) => {
            const i = parseInt(e.target.value);
            let it = isNaN(i) ? null : i;
            actions.setWeightValue(slide.id, {
              system,
              value: it,
            });
          }}
        />
        <InputRightElement>
          <Text>{system === "imperial" ? "lb" : "kg"}</Text>
        </InputRightElement>
      </InputGroup>

      {!state.isValueValid && state.attempts > 0 && (
        <Text position={"absolute"} bottom={0} color="red.300" fontSize={"md"}>
          Please enter a valid weight
        </Text>
      )}
    </FormControl>
  );
}
