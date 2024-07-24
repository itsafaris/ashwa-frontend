import { Button, Flex } from "@chakra-ui/react";
import { useQuizActions, useQuizSnapshot } from "./state";

export interface IUnitSystemPickerProps {}

export function UnitSystemPicker(props: IUnitSystemPickerProps) {
  const actions = useQuizActions();

  const snap = useQuizSnapshot();

  const system = snap.unitSystem;

  return (
    <Flex gap={2} width={"full"} mb={3} bg={"bg.100"} p={1} borderRadius={"lg"}>
      <Button
        size="sm"
        flex={1}
        colorScheme={system === "imperial" ? "bg" : undefined}
        variant={system === "imperial" ? "solid" : "text"}
        onClick={() => {
          actions.setUnitSystem("imperial");
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
          actions.setUnitSystem("metric");
        }}
      >
        Metric
      </Button>
    </Flex>
  );
}
