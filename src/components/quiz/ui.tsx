import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Icon, useTheme } from "@chakra-ui/react";
import { useQuiz } from "@lib/quiz-lib";
import { ComponentProps } from "react";

export function NextButton(props: ComponentProps<typeof Button>) {
  const theme = useTheme();
  const { submitQuestion } = useQuiz();
  return (
    <Button
      px={8}
      py={6}
      variant={"solid"}
      colorScheme="primary"
      width={"full"}
      borderRadius={8}
      onClick={() => submitQuestion()}
      rightIcon={<Icon as={ArrowRightIcon} />}
      {...props}
    />
  );
}
