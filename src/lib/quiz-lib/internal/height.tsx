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
  const system = snap.unitSystem;

  return (
    <FormControl position={"relative"} pb={7}>
      {snap.unitSystem === "imperial" ? (
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
              value={value?.cm ?? ""}
              type="number"
              onChange={(e) => {
                const i = parseInt(e.target.value);
                let it = isNaN(i) ? null : i;
                actions.setHeightValue(slide.id, {
                  cm: it,
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
