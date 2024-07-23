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
import { SlidePropsHeight } from "../public/types";
import { HeightState, useQuizActions, useQuizSnapshot } from "./state";
import { commonInputStyles } from "./commonInput";

export type HeightProps = {} & SlidePropsHeight;

export function Height({}: HeightProps) {
  const actions = useQuizActions();
  const slide = useSlide();
  const snap = useQuizSnapshot();

  const state = snap.slideStateByID[slide.id] as HeightState;

  const value = state.value;
  const system = value?.system ?? "imperial";

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
            actions.setHeightValue(slide.id, {
              system: "imperial",
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
            actions.setHeightValue(slide.id, { system: "metric" });
          }}
        >
          Metric
        </Button>
      </Flex>

      {!value || value.system === "imperial" ? (
        <Flex gap={2}>
          <InputGroup>
            <Input
              {...commonInputStyles()}
              size={"lg"}
              value={value?.ft ?? ""}
              type="number"
              placeholder="Feet"
              onChange={(e) => {
                const i = parseInt(e.target.value);
                let it = isNaN(i) ? null : i;
                actions.setHeightValue(slide.id, {
                  system: "imperial",
                  ft: it,
                });
              }}
            />
            <InputRightElement>
              <Text>ft</Text>
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            <Input
              {...commonInputStyles()}
              size={"lg"}
              value={value?.in ?? ""}
              type="number"
              placeholder="Inches"
              onChange={(e) => {
                const i = parseInt(e.target.value);
                let it = isNaN(i) ? null : i;
                actions.setHeightValue(slide.id, {
                  system: "imperial",
                  in: it,
                });
              }}
            />
            <InputRightElement>
              <Text>in</Text>
            </InputRightElement>
          </InputGroup>
        </Flex>
      ) : (
        <Flex>
          <InputGroup>
            <Input
              {...commonInputStyles()}
              size={"lg"}
              value={value.value ?? ""}
              type="number"
              onChange={(e) => {
                const i = parseInt(e.target.value);
                let it = isNaN(i) ? null : i;
                actions.setHeightValue(slide.id, {
                  system: "metric",
                  value: it,
                });
              }}
            />
            <InputRightElement>
              <Text>cm</Text>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}

      {!state.isValueValid && state.attempts > 0 && (
        <Text position={"absolute"} bottom={0} color="red.300" fontSize={"md"}>
          Please enter a valid height
        </Text>
      )}
    </FormControl>
  );
}
