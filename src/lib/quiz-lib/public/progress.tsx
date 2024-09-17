import { ComponentProps, useEffect, useState } from "react";
import { Button, Flex, Icon, Progress, Text } from "@chakra-ui/react";

import { useQuizActions, useQuizSnapshot } from "../internal/state";
import { getPosInBounds } from "../internal/utils";
import { ContainerPropsOverride } from "./types";

import { FaArrowLeft } from "react-icons/fa";

export type ProgressIndicatorProps = {
  logo?: React.ReactNode;
  showControls?: boolean;
};

export function ProgressIndicator({
  logo,
  showControls = true,
  ...rest
}: ProgressIndicatorProps & ComponentProps<typeof Flex>) {
  const snap = useQuizSnapshot();
  const actions = useQuizActions();
  const [colorOverrides, setColorOverrides] = useState<
    ContainerPropsOverride["progressBar"] | undefined
  >({});

  // override colors when slide change
  useEffect(() => {
    if (!snap.currentSlide) {
      return;
    }

    setColorOverrides(snap.currentSlide.quizContainerProps?.progressBar as any);
  }, [snap.currentSlide]);

  const overallProgress = Math.ceil(((snap.currentIdx + 1) / snap.slideCount) * 100);

  const colorScheme = colorOverrides?.colorScheme ?? "primary";
  const activeSegmentBg = colorOverrides?.activeSegmentBg ?? "bg.200";
  const inactiveSegmentBg = colorOverrides?.inactiveSegmentBg ?? "bg.200";
  const textColor = colorOverrides?.textColor ?? "text.main";

  return (
    <Flex p={3} direction={"column"} gap={1} alignItems={"center"}>
      <Flex
        width={"full"}
        fontSize={"sm"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={1}
      >
        {showControls && (
          <Button
            variant={"text"}
            size="sm"
            px={0}
            leftIcon={<Icon as={FaArrowLeft} />}
            onClick={() => {
              actions.goToPrev();
            }}
          >
            Back
          </Button>
        )}

        {logo}

        {showControls && (
          <Text fontWeight={"bold"} color={textColor} width={"60px"} textAlign={"right"}>
            {snap.currentIdx + 1} of {snap.slideCount}
          </Text>
        )}
      </Flex>

      <Flex direction={"row"} gap={2} width={"100%"}>
        {snap.segmentsFull.map((s, idx) => {
          const posInBounds = getPosInBounds(snap.currentIdx, s.bounds);
          const segmentIsActive = posInBounds === "inside";
          const idxInBound = snap.currentIdx - s.bounds[0];
          const segmentProgress = ((idxInBound + 1) / s.slideCount) * 100;

          return (
            <Flex
              key={idx}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              flex={s.slideCount / snap.slideCount}
            >
              <Progress
                borderRadius={"full"}
                width={"full"}
                colorScheme={colorScheme}
                background={segmentIsActive ? activeSegmentBg : inactiveSegmentBg}
                value={posInBounds === "left" ? 0 : posInBounds === "right" ? 100 : segmentProgress}
                size={"sm"}
              />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
