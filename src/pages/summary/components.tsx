import { Button, Stack, Text, Icon, StackProps } from "@chakra-ui/react";
import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa6";

export function CTAButton(props: StackProps) {
  return (
    <Stack width={["full", "unset"]} alignItems="center" {...props}>
      <Link to="/product-selection">
        <Button
          size="lg"
          mx="auto"
          variant={"solid"}
          colorScheme={"pink"}
          borderRadius={"full"}
          width={"100%"}
          py={7}
          px={10}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Text lineHeight={1}>See the product</Text>
            <Icon as={FaArrowRight} />
          </Stack>
        </Button>
      </Link>
    </Stack>
  );
}
