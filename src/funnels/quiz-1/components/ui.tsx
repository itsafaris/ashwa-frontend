import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Heading, Icon } from "@chakra-ui/react";
import { useQuiz } from "@lib/quiz-lib";
import { ComponentProps } from "react";

export function NextButton(props: ComponentProps<typeof Button>) {
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
      position={"sticky"}
      boxShadow={"0px -10px 5px 0px #ffffff8a, 0px 10px 5px 0px #ffffff8a"}
      bottom={4}
      {...props}
    />
  );
}

export function QuizHeading(props: ComponentProps<typeof Heading>) {
  return <Heading color="text.main" fontSize={"2xl"} mb={4} {...props}></Heading>;
}
